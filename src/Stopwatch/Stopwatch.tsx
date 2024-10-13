import stopwatchStyles from './stopwatch.module.scss';
import { useState, useEffect } from 'react';
import { LapsTable } from '../Laps/LapsTable';
import { TotalTime } from '../TimeDisplay/TotalTime';
import { LapTime } from '../TimeDisplay/LapTime';
import { ButtonsComponent } from '../Button/ButtonsComponent';
import { Summary } from '../Summary/Summary';

export type Laps = {
  lapNr: number;
  lapTime: number;
};

export const Stopwatch = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [lapTime, setLapTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapsTable, setLapsTable] = useState<Laps[]>([]);
  const [isLapOn, setIsLapOn] = useState(true);

  useEffect(() => {
    let intervalTT: number;
    if (isRunning) {
      intervalTT = setInterval(() => {
        setTotalTime(prev => prev + 10);
        setLapTime(prev => prev + 10);
      }, 10);
    }

    return () => clearInterval(intervalTT);
  }, [isRunning]);

  const startHandle = () => {
    setIsRunning(true);
    setIsLapOn(false);
  };
  const stopHandle = () => {
    setIsRunning(false);
    setIsLapOn(true);

  };

  const lapHandle = () => {
    setLapsTable(prev => [...prev, { lapNr: prev.length + 1, lapTime }]);
    setLapTime(0);
  };

  const resetHandle = () => {
    setTotalTime(0);
    setLapTime(0);
    setLapsTable([]);
  };

  return (
    <>
      <div className={stopwatchStyles.stopwatch}>
        <TotalTime totalTime={totalTime} />
        <LapTime lapTime={lapTime} />
        <ButtonsComponent
          startHandle={startHandle}
          stopHandle={stopHandle}
          lapHandle={lapHandle}
          resetHandle={resetHandle}
          isLapOn={isLapOn}
        />
      </div>
      {isRunning === false && (
        <Summary
          totalTime={totalTime}
          lapsTable={lapsTable}
        />
      )}
      {isRunning === true && <LapsTable lapsTable={lapsTable} />}
    </>
  );
};

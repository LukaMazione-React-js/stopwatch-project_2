import { Button } from '../Button/Button';
import stopwatchStyles from './stopwatch.module.scss';
import buttonStyles from '../Button/button.module.scss';
import { useState, useEffect } from 'react';
import { LapsTable } from '../Laps/LapsTable';
import { TotalTime } from '../TimeDisplay/TotalTime';
import { LapTime } from '../TimeDisplay/LapTime';

export type Laps = {
  lapNr: number;
  lapTime: number;
};

export const Stopwatch = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [lapTime, setLapTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapsTable, setLapsTable] = useState<Laps[]>([]);

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
  };
  const stopHandle = () => {
    setIsRunning(false);
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
        <div className={stopwatchStyles.buttonsLayout}>
          <Button
            onClick={startHandle}
            className={buttonStyles.start}
            text='START'
          />
          <Button
            onClick={stopHandle}
            className={buttonStyles.stop}
            text='STOP'
          />
          <Button
            onClick={lapHandle}
            className={buttonStyles.lap}
            text='LAP'
          />
        </div>
        <Button
          onClick={resetHandle}
          className={buttonStyles.reset}
          text='RESET'
        />
      </div>
      <LapsTable lapsTable={lapsTable} />
    </>
  );
};

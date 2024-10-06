import { Button } from '../Button/Button';
import stopwatchStyles from './stopwatch.module.scss';
import buttonStyles from '../Button/button.module.scss';
import { TimeDisplay } from '../TimeDisplay';
import { useState, useEffect } from 'react';
import { LapsTable } from '../LapsTable';

export const Stopwatch = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [lapTime, setLapTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

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

  }
  
  const resetHandle = () => {
    setTotalTime(0);
    setLapTime(0)
  }
  return (
    <>
      <div className={stopwatchStyles.stopwatch}>
        <TimeDisplay
          totalTime={totalTime}
          lapTime={lapTime}
        />
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
      <LapsTable lapTime={lapTime} />
    </>
  );
};

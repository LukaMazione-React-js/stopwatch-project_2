import { Button } from '../Button/Button';
import stopwatchStyles from './stopwatch.module.scss';
import buttonStyles from '../Button/button.module.scss';
import { TimeDisplay } from '../TimeDisplay';
import { useState, useEffect } from 'react';

export const Stopwatch = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [lapTime, setLapTime] = useState(0);

  useEffect(() => {
    const intervalTT = setInterval(() => {
      setTotalTime(prev => prev + 100);
    }, 10);

    return () => clearInterval(intervalTT);
  }, []);

  useEffect(() => {
    const intervalLT = setInterval(() => {
      setLapTime(prev => prev + 10);
    }, 100);

    return () => clearInterval(intervalLT);
  }, []);

  return (
    <>
      <div className={stopwatchStyles.stopwatch}>
        <TimeDisplay
          totalTime={totalTime}
          lapTime={lapTime}
        />
        <div className={stopwatchStyles.buttonsLayout}>
          <Button
            className={buttonStyles.start}
            text='START'
          />
          <Button
            className={buttonStyles.stop}
            text='STOP'
          />
          <Button
            className={buttonStyles.lap}
            text='LAP'
          />
        </div>
      </div>
    </>
  );
};

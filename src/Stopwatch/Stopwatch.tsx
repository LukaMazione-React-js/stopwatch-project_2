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
      setTotalTime(prev => prev + 10);
    }, 10);

    return () => clearInterval(intervalTT);
  }, []);

  useEffect(() => {
    const intervalLT = setInterval(() => {
      setLapTime(prev => prev + 10);
    }, 10);

    return () => clearInterval(intervalLT);
  }, []);

  return (
    <>
      <TimeDisplay />
      <div className={stopwatchStyles.stopwatch}>
        <div className={stopwatchStyles.buttonsLayout}>
          <Buton
            className={buttonStyles.start}
            text='START'
          />
          <Buton
            className={buttonStyles.stop}
            text='STOP'
          />
          <Button
            className={buttonStyles.lap}
            tet='LAP'
          />
        </div>
      </div>
    </>
  );
};

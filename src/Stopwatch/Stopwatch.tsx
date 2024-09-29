import { Button } from '../Button/Button';
import stopwatchStyles from './stopwatch.module.scss';
import buttonStyles from '../Button/button.module.scss';

export const Stopwatch = () => {
  return (
    <div className={stopwatchStyles.stopwatch}>
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
  );
};

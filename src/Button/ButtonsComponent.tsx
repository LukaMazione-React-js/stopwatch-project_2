import { Button } from '../Button/Button';
import buttonStyles from '../Button/button.module.scss';
import stopwatchStyles from '../Stopwatch/stopwatch.module.scss';

type ButtoncComponentProps = {
  isLapOn: boolean;
  startHandle: () => void;
  stopHandle: () => void;
  lapHandle: () => void;
  resetHandle: () => void;
};

export const ButtonsComponent = ({
  startHandle,
  stopHandle,
  lapHandle,
  resetHandle,
  isLapOn,
}: ButtoncComponentProps) => {
  return (
    <>
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
          disabled={isLapOn}
        />
      </div>
      <Button
        onClick={resetHandle}
        className={buttonStyles.reset}
        text='RESET'
      />
    </>
  );
};

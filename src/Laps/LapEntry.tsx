import { Laps } from '../Stopwatch/Stopwatch';
import { formatTime } from '../utils/formatTime';

import styles from './lapsTable.module.scss'

type LapEntryProps = {
  lap: Laps;
};

export const LapEntry = ({ lap }: LapEntryProps) => {
  const formattedLapTime = formatTime(lap.lapTime)
  return (
    <>
      <tr className={styles.tableRow}>
        <td>{lap.lapNr}</td>
        <td>{formattedLapTime}</td>
      </tr>
    </>
  );
};

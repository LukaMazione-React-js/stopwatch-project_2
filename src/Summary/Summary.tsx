import { Laps } from '../Stopwatch/Stopwatch';
import { formatTime } from '../utils/formatTime';

import styles from './summary.module.scss';

type SummaryProps = {
  totalTime: number;
  lapsTable: Laps[];
};

export const Summary = ({ totalTime, lapsTable }: SummaryProps) => {
  const totalLapsTime = formatTime(totalTime);
  const theSlowestLap = formatTime(
    Math.max(...lapsTable.map(lap => lap.lapTime))
  );
  const theFastesLap = formatTime(
    Math.min(...lapsTable.map(lap => lap.lapTime))
  );
  const averageLap = formatTime(
    lapsTable.length > 0
      ? lapsTable.map(lap => lap.lapTime).reduce((acc, curr) => acc + curr, 0) /
          lapsTable.length
      : 0
  );

  return (
    <>
      <table className={styles.summaryTable}>
        <thead>
          <tr>
            <th colSpan={2}>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>laps numbers</th>
            <td>{lapsTable.length}</td>
          </tr>
          <tr>
            <th>total time</th>
            <td>{totalLapsTime}</td>
          </tr>
          <tr>
            <th>the slowest lap</th>
            <td>{lapsTable.length > 0 ? theSlowestLap : 'N/A'}</td>
          </tr>
          <tr>
            <th>the fastest lap</th>
            <td>{lapsTable.length > 0 ? theFastesLap : 'N/A'}</td>
          </tr>
          <tr>
            <th>average lapTime</th>
            <td>{lapsTable.length > 0 ? averageLap : 'N/A'}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

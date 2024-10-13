import { LapEntry } from './LapEntry';
import { Laps } from '../Stopwatch/Stopwatch';

import styles from './lapsTable.module.scss';

type LapsTableProps = {
  lapsTable: Laps[];
};
export const LapsTable = ({ lapsTable }: LapsTableProps) => {
  return (
    <>
      <table className={styles.lapsTable}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Lap Nr</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody className={styles.tableBody}>
          {lapsTable.map(lap => (
            <LapEntry
              key={lap.lapNr}
              lap={lap}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

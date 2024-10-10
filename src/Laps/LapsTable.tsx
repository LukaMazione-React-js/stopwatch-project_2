import { LapEntry } from './LapEntry';
import { Laps } from '../Stopwatch/Stopwatch';

type LapsTableProps = {
  lapsTable: Laps[];
};
export const LapsTable = ({ lapsTable }: LapsTableProps) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Lap Nr</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          <LapEntry lapsTable={lapsTable} />
        </tbody>
      </table>
    </>
  );
};

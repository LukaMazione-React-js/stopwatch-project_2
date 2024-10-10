import { Laps } from '../Stopwatch/Stopwatch';
import { formatTime } from '../utils/formatTime';

type LapsTableProps = {
  lapsTable: Laps[];
};

export const LapEntry = ({ lapsTable }: LapsTableProps) => {
  return (
    <>
      {lapsTable.map(lap => (
        <tr>
          <td>{lap.lapNr}</td>
          <td>{formatTime(lap.lapTime)}</td>
        </tr>
      ))}
    </>
  );
};

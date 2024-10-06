type LapsTableProps = {
  lapTime: number
}

export const LapsTable = ({ lapTime}: LapsTableProps) => {
  const formatTime = (timeInMS: number) => {
    const minutes = Math.floor(timeInMS / (1000 * 60));
    const seconds = Math.floor((timeInMS % (1000 * 60)) / 1000);
    const miliseconds = Math.floor((timeInMS % 1000) / 10)
  
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${miliseconds.toString().padStart(2, '0')}`;
  };
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
          <tr>
            <th>1</th>
            <td>{formatTime(lapTime)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

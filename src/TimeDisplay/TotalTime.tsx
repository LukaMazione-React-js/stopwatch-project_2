import { formatTime } from '../utils/formatTime';

type TotalTimeProps = {
  totalTime: number;
};

export const TotalTime = ({ totalTime }: TotalTimeProps) => {
  const totalTimeLaps = formatTime(totalTime);

  return <h2>Total time: {totalTimeLaps}</h2>;
};

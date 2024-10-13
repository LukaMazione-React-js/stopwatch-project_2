import { formatTime } from '../utils/formatTime';

type LapTimeProps = {
  lapTime: number;
};

export const LapTime = ({ lapTime }: LapTimeProps) => {
  const singleLapTime = formatTime(lapTime);
  return <h2>Lap time: {singleLapTime}</h2>;
};

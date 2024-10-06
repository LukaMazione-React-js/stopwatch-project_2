import { formatTime } from '../utils/formatTime';

type LapTimeProps = {
  lapTime: number
}

export const LapTime = ({lapTime}: LapTimeProps) => {
return <>
  <h2>Lap time: {formatTime(lapTime)}</h2>
</>
}
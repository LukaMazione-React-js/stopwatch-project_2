import { formatTime } from '../utils/formatTime';

type TotalTimeProps = {
  totalTime: number
}

export const TotalTime = ({totalTime}: TotalTimeProps) => {
return <>
  <h2>Total time: {formatTime(totalTime)}</h2>
</>
}
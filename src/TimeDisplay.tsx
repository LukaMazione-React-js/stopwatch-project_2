type TimeDisplayProps = {
  totalTime: number,
  lapTime: number
}
export const TimeDisplay = ({totalTime, lapTime}: TimeDisplayProps) => {
  
  const formatTime = (timeInMS: number) => {
    const minutes = Math.floor(timeInMS / (1000 * 60));
    const seconds = Math.floor((timeInMS % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((timeInMS % 1000) / 10)
  
    // return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${miliseconds.toString().padStart(2, '0')}`;

    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${milliseconds < 10 ? '0' : ''}${milliseconds}`
  };
  
  return <>
  <h2>Total time: {formatTime(totalTime)}</h2>
  <h2>Lap time: {formatTime(lapTime)}</h2>
  </>;
};

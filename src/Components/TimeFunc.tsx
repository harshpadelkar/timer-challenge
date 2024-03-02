const TimeFunc = (timeInSec: number): Array<number | string> => {
  const hours: number = Math.floor(timeInSec / 3600);
  const minutes: number = Math.floor((timeInSec - hours * 3600) / 60);
  const seconds: number = Math.floor(timeInSec - hours * 3600 - minutes * 60);

  const hoursFormat = hours < 10 ? `0${hours}` : hours;
  const minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

  return [hoursFormat, minutesFormat, secondsFormat];
};

export default TimeFunc;

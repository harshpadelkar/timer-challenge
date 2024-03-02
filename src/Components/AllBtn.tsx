/* eslint-disable @typescript-eslint/ban-types */
import { useState } from "react";

type Props = {
  setTimeInSec: Function;
};
const AllBtn = (props: Props) => {
  const { setTimeInSec } = props;
  const [intervalId, setIntervalId] = useState<number>(0);
  const handleStart = () => {
    const interval: number = setInterval(() => {
      setTimeInSec((prevState: number) => prevState + 1);
    }, 1000);
    setIntervalId(interval);
  };
  const handlePause = () => {
    clearInterval(intervalId);
  };
  const handleReset = () => {
    clearInterval(intervalId);
    setTimeInSec(0);
  };
  return (
    <div className="grid gap-4 m-4 sm:grid-cols-3 ">
      <div className="flex flex-col justify-center items-center rounded shadow-xl bg-red-700  min-h-20  ">
        <p className=" text-4xl font-bold">
          <button onClick={handleStart}> Start</button>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center bg-sky-600 rounded min-h-20 shadow-xl">
        <p className=" text-4xl font-bold">
          <button onClick={handlePause}>Pause</button>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center  bg-amber-500 rounded min-h-20 shadow-xl">
        <p className=" text-4xl font-bold">
          <button onClick={handleReset}>Reset</button>
        </p>
      </div>
    </div>
  );
};

export default AllBtn;

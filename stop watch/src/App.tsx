import AllBtn from "./Components/AllBtn";
import TimeFunc from "./Components/TimeFunc";

import { useState, useEffect } from "react";

function App() {
  const [timeInSec, setTimeInSec] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    const timeArr: Array<number | string> = TimeFunc(timeInSec);
    setTimerArray(timeArr);
  }, [timeInSec]);
  return (
    <>
      <div className="grid m-4">
        <div className="flex flex-col justify-center items-center rounded shadow-xl bg-slate-700 min-h-60">
          <div className=" flex  text-8xl font-bold rounded ">
            <p>{timerArray[0]}</p>
            <span>:</span>
            <p>{timerArray[1]}</p>
            <span>:</span>
            <p>{timerArray[2]}</p>
          </div>
        </div>
      </div>
      <AllBtn setTimeInSec={setTimeInSec} />
    </>
  );
}

export default App;

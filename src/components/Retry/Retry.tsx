import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

export const Retry = () => {
  const { setWordScreenIndex, setPoints, minutes,setMinutes, seconds, setSeconds, points } =
    useGlobalContext() as any;
  const [finalTime, setFinalTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    setFinalTime({ minutes: minutes, seconds: seconds });
  }, []);
  const handleRetry = () => {
    setWordScreenIndex(0);
    setPoints(0);
    setMinutes(0); 
    setSeconds(0)
    setFinalTime({ minutes: 0, seconds: 0 })
  };
  return (
    <div>
      YOU WIN! <button onClick={handleRetry}>RETRY</button>
      <div>
        YOU MAKE {points} POINTS IN {finalTime.minutes}MIN AND 
        {finalTime.seconds} SEC
      </div>
    </div>
  );
};

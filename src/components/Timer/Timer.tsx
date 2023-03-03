import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { countTime } from "../../utils/timerFunctions";

export const Timer = () => {
  const { seconds, setSeconds, minutes, setMinutes } =
    useGlobalContext() as any;

  useEffect(() => {
    countTime(seconds, setSeconds, setMinutes);
  }, [seconds]);

  return (
    <div>
      <div className="title">Timer</div>
      <div>
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
};

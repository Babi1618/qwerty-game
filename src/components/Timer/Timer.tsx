import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

export const Timer = () => {
  const { seconds, setSeconds, minutes, setMinutes } =
    useGlobalContext() as any;
  const countTime = () => {
    setTimeout(() => {
      if (seconds < 59) {
        setSeconds((prev: number) => prev + 1);
      } else {
        setMinutes((prev: number) => prev + 1);
        setSeconds(0);
      }
    }, 1000);
  };

  useEffect(() => {
    countTime();
  }, [seconds]);

  return (
    <div>
      <div>Timer:</div>
      <span>
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
};

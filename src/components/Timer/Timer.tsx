import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { countTime } from "../../utils/timerFunctions";
import { StyledScreenTimerAndPoints } from "../Screen/Screen.styled";

export const Timer = () => {
  const {
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    wordScreenIndex,
    arrayWords,
    setPoints,
  } = useGlobalContext() as any;

  useEffect(() => {
    if (wordScreenIndex < arrayWords.length) {
      console.log(seconds);
      countTime(seconds, setSeconds, setMinutes);
    } else {
      // setSeconds(0);
      // setMinutes(0);
      // setPoints(0);
    }
    // countTime(seconds, setSeconds, setMinutes);
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

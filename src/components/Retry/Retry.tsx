import { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { StyledRetryButton, StyledRetryContainer } from "./Retry.styled";
import Confetti from "react-confetti";

export const Retry = () => {
  const {
    setWordScreenIndex,
    setPoints,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    points,
    setArrayWords
  } = useGlobalContext() as any;
  const [finalTime, setFinalTime] = useState({ minutes: 0, seconds: 0 });

  useEffect(() => {
    setFinalTime({ minutes: minutes, seconds: seconds });
  }, []);

  const handleRetry = () => {
    setArrayWords([""])
    setWordScreenIndex(0);
    setPoints(0);
    setMinutes(0);
    setSeconds(0);
    setFinalTime({ minutes: 0, seconds: 0 });
  };

  return (
    <StyledRetryContainer>
      <Confetti />
      <div className="title">YOU WIN! </div>
      <div>
        YOU MAKE {points} POINTS IN {finalTime.minutes} MINUTES AND{" "}
        {finalTime.seconds} SECONDS!
      </div>
      <StyledRetryButton onClick={handleRetry}>RETRY</StyledRetryButton>
    </StyledRetryContainer>
  );
};

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
    setArrayWords,
  } = useGlobalContext() as any;

  const handleRetry = () => {
    setArrayWords([""]);
    setWordScreenIndex(0);
    setPoints(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <StyledRetryContainer>
      <Confetti />
      <div className="title">YOU WIN! </div>
      <div>
        YOU SCORED {points} POINTS IN
        <span>
          {minutes ? ` ${minutes} MINUTE${minutes > 1 ? `S` : ``} AND ` : ``}
        </span>
        <span>{` ${seconds} SECOND${seconds > 1 ? `S` : ``} `}</span>
      </div>
      <StyledRetryButton onClick={handleRetry}>RETRY</StyledRetryButton>
    </StyledRetryContainer>
  );
};

import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import {
  StyledScreenContainer,
  StyledScreenLetter,
  StyledScreenTimerAndPoints,
  StyledScreenWord,
  StyledScreenWords,
} from "./Screen.styled";

export const Screen = () => {
  const { wordScreenIndex, arrayWords, word, handleChangeColor, points } =
    useGlobalContext() as any;

  return (
    <StyledScreenContainer>
      <StyledScreenTimerAndPoints>
        <div>timer</div>
        <div>punteggio {points}</div>
      </StyledScreenTimerAndPoints>
      {wordScreenIndex < arrayWords.length - 1 ? (
        <StyledScreenWords>
          <StyledScreenWord>
            {word.map((el: string, i: number) => {
              return (
                <StyledScreenLetter key={i} type={handleChangeColor(i)}>
                  {el}
                </StyledScreenLetter>
              );
            })}
          </StyledScreenWord>
        </StyledScreenWords>
      ) : (
        <div>YOU WIN! RETRY? </div>
      )}
    </StyledScreenContainer>
  );
};

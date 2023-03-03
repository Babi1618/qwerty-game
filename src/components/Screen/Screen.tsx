import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { handleChangeColor } from "../../utils/screenFunctions";
import { Points } from "../Points/Points";
import { Retry } from "../Retry/Retry";
import { Timer } from "../Timer/Timer";
import {
  StyledScreenContainer,
  StyledScreenLetter,
  StyledScreenTimerAndPoints,
  StyledScreenWord,
  StyledScreenWords,
} from "./Screen.styled";

export const Screen = () => {
  const { wordScreenIndex, arrayWords, word, value } =
    useGlobalContext() as any;

  return (
    <StyledScreenContainer>
      <StyledScreenTimerAndPoints>
        <Timer />
        <Points />
      </StyledScreenTimerAndPoints>
      {wordScreenIndex < arrayWords.length ? (
        <StyledScreenWords>
          <StyledScreenWord>
            {word.map((el: string, i: number) => {
              return (
                <StyledScreenLetter key={i} type={handleChangeColor(i, value, word)}>
                  {el}
                </StyledScreenLetter>
              );
            })}
          </StyledScreenWord>
        </StyledScreenWords>
      ) : (
        <Retry />
      )}
    </StyledScreenContainer>
  );
};

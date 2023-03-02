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
  const { wordScreenIndex, arr, value, letterKey } = useGlobalContext() as any;
  const word = arr;

  const handleChangeColor = (el: string, i: number) => {
    console.log(letterKey);
    if (value[i] === word[i]) {
      return "ok";
    }
    return "";
  };

  return (
    <StyledScreenContainer>
      <StyledScreenTimerAndPoints>
        <div>timer</div>
        <div>punteggio</div>
      </StyledScreenTimerAndPoints>
      <StyledScreenWords>
        <StyledScreenWord>
          {word.map((el: string, i: number) => {
            return (
              <StyledScreenLetter key={i} type={handleChangeColor(el, i)}>
                {el}
              </StyledScreenLetter>
            );
          })}
        </StyledScreenWord>
        <h1>{value}</h1>
      </StyledScreenWords>
    </StyledScreenContainer>
  );
};

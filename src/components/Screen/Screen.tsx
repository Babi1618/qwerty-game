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
  const { wordScreenIndex, arrayWords, arr, value, letterKey } =
    useGlobalContext() as any;
  let word = arr;

  const handleChangeColor = (i: number) => {
    if (i < value.length) {
      if (value[i] === word[i]) {
        return "ok";
      } else {
        return "error";
      }
    }
    return "";
  };
  // console.log(wordScreenIndex, arrayWords);

  return (
    <StyledScreenContainer>
      <StyledScreenTimerAndPoints>
        <div>timer</div>
        <div>punteggio</div>
      </StyledScreenTimerAndPoints>
      {wordScreenIndex < arrayWords.length - 1 ? (
        <StyledScreenWords>
          <StyledScreenWord>
            {arr.map((el: string, i: number) => {
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

      {/* <h1>{value}</h1> */}
    </StyledScreenContainer>
  );
};

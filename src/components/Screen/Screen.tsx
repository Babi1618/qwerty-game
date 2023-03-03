import { useCallback, useEffect, useState } from "react";
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
  const { wordScreenIndex, arrayWords, word, value, greatOpen } =
    useGlobalContext() as any;

  const [great, setGreat] = useState("");

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  const incentives = ["GREAT!", "WOW", "TOP", "YOU'RE A MASTER", "GO BABY!"];
  const findIncentives = () => {
    const incentive = incentives[getRandomInt(incentives.length)];
    setGreat(incentive);
  };

  useEffect(() => {
    findIncentives();
  }, [greatOpen]);

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
                <StyledScreenLetter
                  key={i}
                  type={handleChangeColor(i, value, word)}
                >
                  {el}
                </StyledScreenLetter>
              );
            })}
          </StyledScreenWord>
          {greatOpen && <div>{great}</div>}
        </StyledScreenWords>
      ) : (
        <Retry />
      )}
    </StyledScreenContainer>
  );
};

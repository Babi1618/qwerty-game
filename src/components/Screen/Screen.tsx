import React, { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { incentives } from "../../utils/incentives";
import { handleChangeColor } from "../../utils/screenFunctions";
import { Points } from "../Points/Points";
import { Retry } from "../Retry/Retry";
import { Timer } from "../Timer/Timer";
import {
  StyledGreatContainer,
  StyledGreatContent,
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

  const findIncentives = useCallback(() => {
    const incentive = incentives[getRandomInt(incentives.length)];
    setGreat(incentive);
  }, []);

  useEffect(() => {
    findIncentives();
  }, [findIncentives, greatOpen]);

  return (
    <>
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
                    type={handleChangeColor(i, value, word, greatOpen)}
                  >
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
      {greatOpen && (
        <StyledGreatContainer>
          <StyledGreatContent>{great}</StyledGreatContent>
        </StyledGreatContainer>
      )}
    </>
  );
};

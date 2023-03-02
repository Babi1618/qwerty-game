import { useEffect, useState } from "react";
import { Keyboard } from "../../components/Keyboard/Keyboard";
import { Screen } from "../../components/Screen/Screen";
import { useGlobalContext } from "../../context/GlobalContext";
import { StyledQwertyGame } from "./QwertyGame.styled";

export const QwertyGame = () => {
  return (
    <StyledQwertyGame>
      <Screen />
      <Keyboard />
    </StyledQwertyGame>
  );
};

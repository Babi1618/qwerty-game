import { useEffect, useState } from "react";
import { Keyboard } from "../../components/Keyboard/Keyboard";
import { Screen } from "../../components/Screen/Screen";
import { useGlobalContext } from "../../context/GlobalContext";
import { StyledQwertyGame } from "./QwertyGame.styled";

export const QwertyGame = () => {
  const { wordScreenIndex } = useGlobalContext() as any;
  // const arrayWords = ["QWE", "CIAO"];
  // const arr = arrayWords[0].split("");
  // console.log(arr);
  const { letterScreenIndex, arr, value, setValue, letterKey } = useGlobalContext() as any;
  useEffect(() => {
    // console.log("value", value);
    // console.log(letterKey)
  }, [value]);
  return (
    <StyledQwertyGame>
      <Screen />
      <Keyboard />
    </StyledQwertyGame>
  );
};

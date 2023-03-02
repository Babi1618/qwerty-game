import { useEffect, useState } from "react";
import { Keyboard } from "../../components/Keyboard/Keyboard";
import { Screen } from "../../components/Screen/Screen";
import { StyledQwertyGame } from "./QwertyGame.styled";

export const QwertyGame = () => {
  const word = "Parola";
  const array = word.split("");
  const [letterScreen, setLetterScreen] = useState<number>(0);
  const [letterKey, setLetterKey] = useState("");

  useEffect(() => {
    console.log(letterKey);
  }, [letterKey]);
  
  return (
    <StyledQwertyGame>
      <Screen word={array} />
      <Keyboard setLetterKey={setLetterKey} />
    </StyledQwertyGame>
  );
};

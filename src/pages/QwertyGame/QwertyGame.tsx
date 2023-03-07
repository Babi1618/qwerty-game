import { useEffect } from "react";
import { Keyboard } from "../../components/Keyboard/Keyboard";
import { Screen } from "../../components/Screen/Screen";
import { useGlobalContext } from "../../context/GlobalContext";
import { StyledQwertyGame } from "./QwertyGame.styled";

export const QwertyGame = () => {
  const { arrayWords, setArrayWords } = useGlobalContext() as any;

  return (
    <StyledQwertyGame>
      {arrayWords[0] !== "" ? (
        <>
          <Screen />
          <Keyboard />
        </>
      ) : (
        <div>loading</div>
      )}
    </StyledQwertyGame>
  );
};

import { Keyboard } from "../../components/Keyboard/Keyboard";
import { Screen } from "../../components/Screen/Screen";
import { StyledQwertyGame } from "./QwertyGame.styled";

export const QwertyGame = () => {
  return (
    <StyledQwertyGame>
      <Screen />
      <Keyboard />
    </StyledQwertyGame>
  );
};

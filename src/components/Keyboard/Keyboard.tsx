import { qwertyItalian } from "../../utils/qwertyItaliansLetters";
import { Button } from "../Button/Button";
import { StyledKeyboardContainer, StyledKeyboardGrid } from "./Keyboard.styled";

export const Keyboard = ({setLetterKey}:any) => {
  return (
    <StyledKeyboardContainer>
      <StyledKeyboardGrid>
        {qwertyItalian.map((el: string) => {
          return (
            <Button
              key={el}
              letter={el}
              setLetterKey={setLetterKey}
              className={
                el === "A"
                  ? `first-item-second-row`
                  : el === "Z"
                  ? `first-item-third-row`
                  : ``
              }
            />
          );
        })}
      </StyledKeyboardGrid>
    </StyledKeyboardContainer>
  );
};

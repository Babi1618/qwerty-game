import { qwertyItalian } from "../../utils/qwertyItaliansLetters";
import { Button } from "../Button/Button";
import { StyledKeyboardContainer, StyledKeyboardGrid } from "./Keyboard.styled";

export const Keyboard = () => {
  return (
    <StyledKeyboardContainer>
      <StyledKeyboardGrid>
        {qwertyItalian.map((el: string) => {
          return (
            <Button
              key={el}
              letter={el}
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

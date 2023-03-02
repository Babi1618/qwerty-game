import { Button } from "../Button/Button";
import { StyledKeyboardContainer, StyledKeyboardGrid } from "./Keyboard.styled";

export const Keyboard = () => {
  return (
    <StyledKeyboardContainer>
      <StyledKeyboardGrid>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div>A</div>
        <div className=" first-item-b">B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div>B</div>
        <div className=" first-item-c">C</div>
        <div>C</div>
        <div>C</div>
        <div>C</div>
        <div>C</div>
        <div>C</div>
        <div>C</div>
      </StyledKeyboardGrid>
    </StyledKeyboardContainer>
  );
};

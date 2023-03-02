import { Button } from "../Button/Button";
import { StyledKeyboardContainer, StyledKeyboardGrid } from "./Keyboard.styled";

export const Keyboard = () => {
  const qwertyItalian = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];
  return (
    <StyledKeyboardContainer>
      <StyledKeyboardGrid>
        {qwertyItalian.map((el: string) => {
          return (
            <Button
              key={el}
              letter={el}
              className={
                el === "A" ? `first-item-b` : el === "Z" ? `first-item-c` : ``
              }
            />
          );
        })}
        {/* <div>A</div>
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
        <div>C</div> */}
      </StyledKeyboardGrid>
    </StyledKeyboardContainer>
  );
};

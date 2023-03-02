import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { StyledButton, StyledButtonContainer } from "./Button.styled";

export const Button = ({ letter, className }: any) => {
  const {
    letterScreenIndex,
    setLetterScreenIndex,
    arr,
    value,
    setValue,
    setLetterKey,
  } = useGlobalContext() as any;

  const handleClick = (letter: string) => {
    // setLetterKey(letter);
    const value2=value
    if (value.length > letterScreenIndex) {
        value2.pop();
      }
    if (arr[letterScreenIndex] === letter) {
      setValue([...value2, letter]);
      setLetterScreenIndex((prev: number) => prev + 1);
    } else {
      setValue([...value2, letter]);
    }
  };

  return (
    <StyledButtonContainer className={className}>
      <StyledButton onClick={() => handleClick(letter)}>{letter}</StyledButton>
    </StyledButtonContainer>
  );
};

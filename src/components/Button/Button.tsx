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
    if (arr[letterScreenIndex] === letter) {
      setValue([...value, letter]);
      setLetterScreenIndex((prev: number) => prev + 1);
    }
  };

  return (
    <StyledButtonContainer className={className}>
      <StyledButton onClick={() => handleClick(letter)}>{letter}</StyledButton>
    </StyledButtonContainer>
  );
};

import { useGlobalContext } from "../../context/GlobalContext";
import { StyledButton, StyledButtonContainer } from "./Button.styled";

export const Button = ({ letter, className }: any) => {
  const {
    letterScreenIndex,
    setLetterScreenIndex,
    word,
    value,
    setValue,
    setPoints,
  } = useGlobalContext() as any;

  const handleClick = (letter: string) => {
    countPoints(word, letterScreenIndex, letter);
    if (value.length > letterScreenIndex) {
      value.pop();
    }
    setValue([...value, letter]);
    if (word[letterScreenIndex] === letter) {
      setLetterScreenIndex((prev: number) => prev + 1);
    }
  };

  const countPoints = (word: any, index: number, letter: string) => {
    if (word[letterScreenIndex] === letter) {
      setPoints((prev: number) => prev + 1);
    } else {
      setPoints((prev: number) => prev - 1);
    }
  };

  return (
    <StyledButtonContainer className={className}>
      <StyledButton onClick={() => handleClick(letter)}>{letter}</StyledButton>
    </StyledButtonContainer>
  );
};

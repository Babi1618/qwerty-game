import { StyledButton, StyledButtonContainer } from "./Button.styled";

export const Button = ({ letter, className, setLetterKey }: any) => {
  const handleClick = (letter: string) => {
    setLetterKey(letter);
  };
  return (
    <StyledButtonContainer className={className}>
      <StyledButton onClick={() => handleClick(letter)}>{letter}</StyledButton>
    </StyledButtonContainer>
  );
};

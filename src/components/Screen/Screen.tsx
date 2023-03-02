import {
  StyledScreenContainer,
  StyledScreenTimerAndPoints,
  StyledScreenWords,
} from "./Screen.styled";

export const Screen = () => {
  return (
    <StyledScreenContainer>
      <StyledScreenTimerAndPoints>
        <div>timer</div>
        <div>punteggio</div>
      </StyledScreenTimerAndPoints>
      <StyledScreenWords>parole</StyledScreenWords>
    </StyledScreenContainer>
  );
};

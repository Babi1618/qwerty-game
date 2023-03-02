import { useGlobalContext } from "../../context/GlobalContext";
import {
  StyledScreenContainer,
  StyledScreenLetter,
  StyledScreenTimerAndPoints,
  StyledScreenWord,
  StyledScreenWords,
} from "./Screen.styled";

export const Screen = ({ word }: any) => {
  const { hello } = useGlobalContext() as any;
  // console.log(hello)
  return (
    <StyledScreenContainer>
      <StyledScreenTimerAndPoints>
        <div>timer</div>
        <div>punteggio</div>
      </StyledScreenTimerAndPoints>
      <StyledScreenWords>
        <StyledScreenWord>
          {word.map((el: string, i: number) => {
            return <StyledScreenLetter key={i}>{el}</StyledScreenLetter>;
          })}
        </StyledScreenWord>
      </StyledScreenWords>
    </StyledScreenContainer>
  );
};

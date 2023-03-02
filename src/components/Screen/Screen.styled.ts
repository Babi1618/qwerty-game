import styled from "styled-components";

export const StyledScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledScreenTimerAndPoints = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  > div {
    width: 100%;
    text-align: center;
  }
`;

export const StyledScreenWords = styled.div``;

export const StyledScreenWord = styled.div`
  font-size: 20px;
  font-weight: 900;
  text-transform: uppercase;
  color: grey;
`;
export const StyledScreenLetter = styled.span<any>`
  color: ${({ type }) =>
    type === "ok" ? "green" : type === "error" ? "red" : ""};
`;

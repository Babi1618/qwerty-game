import styled from "styled-components";

export const StyledScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #c5c6c8;
  border-radius: 0.5rem;
  padding: 20px;
  gap: 30px;
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
  .title {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const StyledScreenWords = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  :last-child {
    font-size: 12px;
  }
`;

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

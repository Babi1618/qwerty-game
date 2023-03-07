import styled from "styled-components";

export const StyledKeyboardContainer = styled.div`
  border: 1px solid #c5c6c8;
  box-shadow: -3px -3px 7px #c5c6c8, 2px 2px 5px rgb(94 104 121 / 29%);
  border-radius: 0.5rem;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

export const StyledKeyboardGrid = styled.div`
  /* background-color: #c5c6c8; */
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  padding: 5px 0;
  gap: 15px;
  > div {
    grid-column: span 2;
    place-self: center;
  }
  .first-item-second-row {
    grid-column: 2;
  }
  .first-item-third-row {
    grid-column: 4;
  }
`;

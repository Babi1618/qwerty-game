import styled from "styled-components";

export const StyledKeyboardContainer = styled.div`
  background-color: lightblue;
  padding: 50px;
`;

export const StyledKeyboardGrid = styled.div`
  background-color: lightcoral;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  > div {
    grid-column: span 2;
    place-self: center;
  }
  .first-item-b {
    grid-column: 2;
  }
  .first-item-c {
    grid-column: 4;
  }
`;

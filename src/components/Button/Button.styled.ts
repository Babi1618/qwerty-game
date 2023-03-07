import styled from "styled-components";

export const StyledButtonContainer = styled.div``;
export const StyledButton = styled.button`
  height: 40px;
  width: 40px;
  /* background-color: #f2f3f7;*/
  font-family: "Courier New", Courier, monospace;
  /* font-family: "Open Sans", sans-serif; */
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #484848;
  cursor: pointer;
  border: 0px solid;
  padding: 0.25em 0.5em;
  box-shadow: -3px -3px 4px #c5c6c8, 2px 2px 5px rgb(94 104 121 / 29%);
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 2px;
    left: 2px;
  }
`;

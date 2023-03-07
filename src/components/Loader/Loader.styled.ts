import styled from "styled-components";

export const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  /* background-color: #484848; */
`;
export const StyledLoader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #484848;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

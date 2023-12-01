import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #e2e2e2 !important;
  margin: 0px;
  padding: 0px;
  z-index: 9999 !important;

  .logo{
    width: 300px;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    svg{
      animation: animate 3s linear infinite;
      path:last-child{
        fill:white;
      }
    }
  }

  @keyframes animate {
    0% {
      transform: scale(0.8);
    }
    25% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    75% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
  
`;

export { LoaderWrapper };

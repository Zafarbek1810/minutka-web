import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 333;
  width: 100%;

  width: 100%;
  height: auto;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  /* position: fixed !important; */
  background-color: #fff !important;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 250px;
      /* margin-right: 250px; */
      img{
        max-width: 100%;
      }
      svg{
        width: 100%;
        height: 50px;
      }
    }
    @media (max-width: 470px) {
      .logo{
        margin-right: 0;
        margin-top: 5px;
      }
    }
  }
`;

export {HeaderWrapper};

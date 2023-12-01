import styled from "styled-components";

const AnimatedBannerTextWrapper = styled.div`
  .banner-text {
    margin-bottom: 20px;
  }

  .animated-title {
    h1 {
      color: #fff;
      font-size: 70px;
      margin-bottom: 12px;
      margin-top: 0;
      font-weight: 700;
      @media (max-width: 767px) {
        font-size: 36px;
      }
    }
    h3 {
      color: #fff;
      font-size: 25px;
      margin: 0;
      @media (max-width: 767px) {
        font-size: 22px;
      }
    }
  }

  .text-top {
    width: 570px;
    overflow: hidden;
    border-bottom: 2px solid #fff;
    margin-bottom: 12px;
    @media (max-width: 767px) {
      width: auto;
    }
  }

  .text-bottom {
    overflow: hidden;
  }
`;

export { AnimatedBannerTextWrapper };

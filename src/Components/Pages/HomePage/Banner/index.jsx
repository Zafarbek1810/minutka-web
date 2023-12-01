import React from "react";
import { BannerWrapper } from "./style";
import Container from "../../../Common/Container";
import LogoSvg from "../../../Common/Svgs/LogoSvg";
import AnimatedBannerText from "./Components/AnimatedBannerText"
const Banner = () => {
    const [width, setWidth] = React.useState(1);

    React.useEffect(() => {
        function handleResize() {
          const { innerWidth } = window;
          setWidth(innerWidth);
        }
        handleResize();
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    const val = (() => {
        if (width > 1440) {
          return 100;
        } else if (width > 1200) {
          return 90;
        } else if (width > 991) {
          return 80;
        } else if (width > 767) {
          return 60;
        } else if (width < 768) {
          return 50;
        } else {
          return 50;
        }
      })();
    
      const grad = (() => {
        if (width === 1) {
          return 0;
        }
        const num = val / width;
        const gr = num / 0.0175;
        return gr;
      })();


      
  return (
    <BannerWrapper>
      <Container>
        <div className="wrapper">
          <div className="left">
            <LogoSvg />
            <AnimatedBannerText />
          </div>
          <div className="right">
            <img src="/images/map.png" alt="" />
          </div>
        </div>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;

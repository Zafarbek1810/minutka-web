import React, { useContext, useEffect } from "react";
import { HeaderWrapper } from "./Header.style";
import Burger from "./Burger/Burger";
import MyLink from "../../Common/MyLink";
import Container from "../../Common/Container";
import LogoHorizon from "../../Common/Svgs/LogoHorizon";

const Header = () => {

  return (
    <HeaderWrapper>
        <Container>
          <div className="nav">
            <MyLink className="logo" to="/">
              <LogoHorizon />
            </MyLink>
            <Burger />
          </div>
        </Container>
    </HeaderWrapper>
  );
};

export default Header;

import React from "react";
import FooterWrapper from "./Footer.style";
import { useTranslation } from "react-i18next";
import Container from "../../Common/Container";
import FooterLogo from "../../Common/Svgs/FooterLogo";
import AppleSvg from "../../Common/Svgs/AppleSvg";
import PlayMarketLogo from "../../Common/Svgs/PlayMarketLogo";
import MailSvg from "../../Common/Svgs/MailSvg";
import TelegramSvg from "../../Common/Svgs/TelegramSvg";
import TelSvg from "../../Common/Svgs/TelSvg";
import MyLink from "../../Common/MyLink";
import LogoHorizon from "../../Common/Svgs/LogoHorizon";


const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <FooterWrapper>
      <Container>
        <div className="wrap">
          <div className="col-1" data-aos={"fade-right"}>
            <div className="logo">
              <LogoHorizon />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, doloremque?
            </p>
          </div>
          <div className="col-3" data-aos={"fade-left"}>
            <h5 className="title">{t("footer.contact")}</h5>
            <div className="contact">
              <a href="tel:+998999999999">
                <TelSvg /> +998 99 999 99 99
              </a>
              <br />
              <a href="mailto:blabla.uz">
                <MailSvg /> info@mail.uz
              </a>
              <br />
              <a href="https://t.me/telegramlink" target="blank">
                <TelegramSvg /> @telegramlink
              </a>
              <br />
            </div>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;

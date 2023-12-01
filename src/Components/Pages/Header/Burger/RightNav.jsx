import React, { useEffect } from "react";
import { RightNavWrapper } from "./RightNav.style";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import MyLink from "../../../Common/MyLink";
import { Popover, Select } from "antd";
import { Option } from "antd/lib/mentions";
import DownIcon from "../../../Common/Svgs/DownIcon";

const RightNav = ({ open }) => {
  const { t, i18n } = useTranslation();
  const defaultLang = i18n.language;
  const router = useRouter();

  const handleChange = (e) => {
    localStorage.setItem("siteLang", e);
    i18n.changeLanguage(e);
  };

  // useEffect(() => {
  //   AOS.init({
  //     duration: 800,
  //     once: true,
  //   });
  //   AOS.refresh();
  // }, []);

  // const handleChange = (value) => {
  //   // localStorage.setItem("siteLang", value);
  //   // i18n.changeLanguage(value);
  //   // console.log(value);

  //   console.log("chnge lang");
  // };
  const content = (
    <div>
      <p>Telefon : +99899 999 99 99</p>
      <p>Telegram : @teleramlink</p>
    </div>
  );

  return (
    <RightNavWrapper open={open}>
      <ul className="header">
        <li>
          <MyLink to="/register" className={router.pathname == "/register" ? "active" : "link"}>
            Register
          </MyLink>
        </li>
        <li>
          <Popover  content={content} title="Title" trigger="click" className={router.pathname == "/" ? "active" : "link"}>
            Contact
          </Popover>
        </li>
        
        <li>
          <div className="lang">
            <Select
              value={"uz"}
              bordered={false}
              style={{
                width: 120,
                backgroundColor: "transparent",
                color: "#043353",
              }}
              suffixIcon={<DownIcon />}
              onChange={handleChange}
            >
              <Option value="ru" className="options">
                <img src="/images/ru.png" alt="Russian flag" /> Рус
              </Option>
              <Option value="uz" className="options">
              <img src="/images/uz.png" alt="Uzbekistan flag" /> Uzb
              </Option>
            </Select>
          </div>
        </li>
      </ul>
    </RightNavWrapper>
  );
};

export default RightNav;

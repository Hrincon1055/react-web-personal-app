import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
// Mis componentes
import { getMenuApi } from "../../../api/menu";
import logoWhite from "../../../assets/img/png/logo-white.png";
import SocialLink from "../socialLinks";
import "./menuTop.scss";
//? Inicio
export default function MenuTop() {
  // state
  const [menuData, setMenuData] = useState([]);
  // effect
  useEffect(() => {
    getMenuApi().then(({ menu }) => {
      let arrMenu = [];
      arrMenu = menu.filter((item) => item.active === true);
      setMenuData(arrMenu);
    });
  }, []);
  return (
    <div className="content-nav">
      <div>
        <Link to={"/"} style={{ padding: 10, width: 200 }}>
          <img
            src={logoWhite}
            alt="logo"
            style={{ width: "100%", padding: 10 }}
          />
        </Link>
      </div>
      <Menu className="menu-top-web" mode="horizontal" selectedKeys="home">
        {menuData.map((item) => {
          const external = item.url.indexOf("http") > -1 ? true : false;
          if (external) {
            return (
              <Menu.Item key={item._id} className="menu-top-web__item">
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
              </Menu.Item>
            );
          }
          return (
            <Menu.Item key={item._id} className="menu-top-web__item">
              <Link to={item.url}> {item.title}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
      <SocialLink />
    </div>
  );
}

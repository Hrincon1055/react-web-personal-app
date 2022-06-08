import React, { useState, useEffect } from "react";
// Mis componentes
import { getMenuApi } from "../../../api/menu";
import MenuWebList from "../../../components/admin/menuWeb/menuWebList";
import "./menuWeb.scss";
//? Inicio
export default function MenuWeb() {
  // state
  const [menu, setMenu] = useState([]);
  const [reloadMenuWeb, setReloadMenuWeb] = useState(false);

  // effect
  useEffect(() => {
    getMenuApi().then((response) => {
      setMenu(response.menu);
    });
    setReloadMenuWeb(false);
  }, [reloadMenuWeb]);
  return (
    <div className="menu-web">
      <MenuWebList menu={menu} setReloadMenuWeb={setReloadMenuWeb} />
    </div>
  );
}

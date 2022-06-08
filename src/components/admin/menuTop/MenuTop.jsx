import { Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import HenryLogo from "../../../assets/img/png/logo-white.png";
import { logout } from "../../../api/auth";
import "./menuTop.scss";

//* Inicio
export default function MenuTop(props) {
  // props
  const { menuCollapsed, setMenuCollapsed } = props;
  // funciones
  const handleLogoutClick = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          src={HenryLogo}
          alt="Henry Rincon"
          className="menu-top__left-logo"
        />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={handleLogoutClick}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}

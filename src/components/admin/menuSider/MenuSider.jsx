import { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
// import { HomeOutlined, UserOutlined, MenuOutlined } from "@ant-design/icons";
// Mis componentes
import routes from "../../../config/routes";
import "./menuSider.scss";
//* Inicio
function MenuSider(props) {
  // props
  const { menuCollapsed, location } = props;
  // state
  const [navegacion, setNavegacion] = useState([]);
  // effec
  useEffect(() => {
    const navTemp = routes[0].routes.filter(
      (route) => route.isVisible === true
    );
    setNavegacion(navTemp);
  }, []);
  return (
    <Layout.Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        {navegacion.map((route) => (
          <Menu.Item key={route.path}>
            <Link to={route.path}>
              <route.Icon />
              <span className="nav-text">{route.title}</span>
            </Link>
          </Menu.Item>
        ))}
        {/* <Menu.Item key="/admin">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/users">
          <Link to={"/admin/users"}>
            <UserOutlined />
            <span className="nav-text">Usuarios</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/menu">
          <Link to={"/admin/menu"}>
            <MenuOutlined />
            <span className="nav-text">Menu</span>
          </Link>
        </Menu.Item> */}
      </Menu>
    </Layout.Sider>
  );
}
export default withRouter(MenuSider);

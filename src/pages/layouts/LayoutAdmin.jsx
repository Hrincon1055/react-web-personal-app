import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
//* Mis componentes
import MenuTop from "../../components/admin/menuTop";
import MenuSider from "../../components/admin/menuSider";
import { getAccessTokenApi, getRefreshTokenApi } from "../../api/auth";
import useAuth from "../../hooks/useAuth";
import { Signin } from "../admin/";
import "./layoutAdmin.scss";
//* Inicio
export default function LayoutAdmin(props) {
  // props
  const { routes } = props;
  // state
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  // constantes
  const { user, isLoading } = useAuth();
  // const token = getRefreshTokenApi();

  // returns
  if (!user && !isLoading) {
    return (
      <>
        <Redirect to="/admin/login" />
        <Route path="/admin/login/" component={Signin} />
      </>
    );
  }
  if (user && !isLoading) {
    return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout
          className="layout-admin"
          style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
          <Layout.Header className="layout-admin__header">
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Layout.Header>
          <Layout.Content className="layout-admin__content">
            <LoadRoutes routes={routes} />
          </Layout.Content>
          <Layout.Footer className="layout-admin__footer">Footer</Layout.Footer>
        </Layout>
      </Layout>
    );
  }
  return null;
}
//* funciones internas
function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}

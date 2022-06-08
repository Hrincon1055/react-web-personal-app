import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
// Mis componentes
import MenuTop from "../../components/web/menuTop";
import "./layoutBasic.scss";
//* Inicio
export default function LayoutBasic(props) {
  // props
  const { routes } = props;
  // render
  return (
    <>
      <Row>
        <Col md={4} />
        <Col md={16}>
          <MenuTop />
        </Col>
        <Col md={4} />
      </Row>
      <LoadRoutes routes={routes} />
      <Layout.Footer>Henry Rincon s</Layout.Footer>
    </>
  );
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

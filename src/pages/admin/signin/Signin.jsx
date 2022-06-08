import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/png/logo-white.png";
// Mis componentes
import RegisterForm from "../../../components/admin/registerForm";
import LoginFrom from "../../../components/admin/loginForm";
import { getAccessTokenApi } from "../../../api/auth";
import "./signin.scss";
//* Inicio
export default function Signin() {
  if (getAccessTokenApi()) {
    return <Redirect to="/admin" />;
  }
  return (
    <Layout className="sign-in">
      <Layout.Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Henry Rincon" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <Tabs.TabPane tab={<span>Entrar</span>} key="1">
              <LoginFrom />
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span>Nuevo Usuario</span>} key="2">
              <RegisterForm />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </Layout.Content>
    </Layout>
  );
}

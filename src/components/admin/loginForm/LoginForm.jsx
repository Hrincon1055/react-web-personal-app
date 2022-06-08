import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
// Mis componentes
import { signInApi } from "../../../api/user";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../../utils/constants";
import "./loginForm.scss";
//* Inicio
export default function LoginForm() {
  // state
  const [inputs, setInputs] = useState({ email: "", password: "" });

  // funciones
  const changeForm = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const login = async (e) => {
    e.preventDefault();
    const result = await signInApi(inputs);
    console.log(result);
    if (result.msg) {
      console.log(result);
      notification["error"]({
        message: result.msg,
      });
    } else {
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);
      notification["success"]({
        message: "Login correcto.",
      });
      window.location.href = "/admin";
    }
  };
  // returns
  return (
    <Form className="login-form" onChange={changeForm} onSubmitCapture={login}>
      <Form.Item>
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0, .25)" }} />}
          type="email"
          name="email"
          placeholder="E-mail"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0, .25)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form__button">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}

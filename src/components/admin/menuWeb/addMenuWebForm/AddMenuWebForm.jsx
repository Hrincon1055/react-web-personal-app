import React, { useState } from "react";
import { Form, Input, Button, Select, notification } from "antd";
import { FontSizeOutlined } from "@ant-design/icons";
// Mis componentes
import { addMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";
import "./addMenuWebForm.scss";
//? Inicio
export default function AddMenuWebForm(props) {
  // props
  const { setIsVisibleModal, setReloadMenuWeb } = props;
  // state
  const [menuWebData, setMenuWebData] = useState({
    title: "",
    http: "http://",
    url: "",
  });
  // funciones
  const addMenu = (e) => {
    e.preventDefault();
    let finalData = {
      title: menuWebData.title,
      url: `${menuWebData.http}${menuWebData.url}`,
    };
    if (!finalData.title || !finalData.url || !menuWebData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else {
      const token = getAccessTokenApi();
      finalData.active = false;
      finalData.order = 1000;
      addMenuApi(token, finalData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadMenuWeb(true);
          setMenuWebData({
            title: "",
            http: "http://",
            url: "",
          });
          finalData = {};
        })
        .catch(() => {
          notification["error"]({
            message: "Error en el servidor.",
          });
        });
    }
  };
  // render
  return (
    <div className="add-menu-web-form">
      <AddForm
        menuWebData={menuWebData}
        setMenuWebData={setMenuWebData}
        addMenu={addMenu}
      />
    </div>
  );
}

function AddForm(props) {
  // props
  const { menuWebData, setMenuWebData, addMenu } = props;
  // funciones
  const selectBefore = (
    <Select
      defaultValue="http://"
      value={menuWebData.http}
      style={{ width: 90 }}
      onChange={(e) => setMenuWebData({ ...menuWebData, http: e })}
    >
      <Select.Option value="http://">http://</Select.Option>
      <Select.Option value="https://">https://</Select.Option>
    </Select>
  );
  return (
    <Form className="form-add" onSubmitCapture={addMenu}>
      <Form.Item>
        <Input
          prefix={<FontSizeOutlined style={{ color: "rgba(0,0,0, .25)" }} />}
          placeholder="Titulo"
          value={menuWebData.title}
          onChange={(e) =>
            setMenuWebData({ ...menuWebData, title: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Input
          addonBefore={selectBefore}
          placeholder="URl"
          value={menuWebData.url}
          onChange={(e) =>
            setMenuWebData({ ...menuWebData, url: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear Menu
        </Button>
      </Form.Item>
    </Form>
  );
}
//  <Select
//    placeholder="Selecciona un rol"
//    onChange={(e) => setUserData({ ...userData, role: e })}
//    value={userData.role}
//    style={{ width: "100%" }}
//  >
//    <Select.Option value="admin">Administrador</Select.Option>
//    <Select.Option value="editor">Editor</Select.Option>
//    <Select.Option value="revisor">Revisor</Select.Option>
//  </Select>;

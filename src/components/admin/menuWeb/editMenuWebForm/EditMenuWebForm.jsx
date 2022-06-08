import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import { FontSizeOutlined, LinkOutlined } from "@ant-design/icons";
// Mis componentes
import { updateMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";
import "./editMenuWebForm.scss";
//? inicio
export default function EditMenuWebForm(props) {
  // props
  const { setIsVisibleModal, setReloadMenuWeb, menu } = props;
  // state
  const [menuWebData, setMenuWebData] = useState(menu);
  // effect
  useEffect(() => {
    setMenuWebData(menu);
  }, [menu]);
  // funciones
  const editMenu = (e) => {
    e.preventDefault();
    if (!menuWebData.title || !menuWebData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else {
      const token = getAccessTokenApi();
      updateMenuApi(token, menuWebData._id, menuWebData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadMenuWeb(true);
        })
        .catch((err) => {
          notification["error"]({
            message: "Error del servidor, Intentelo mas tarde.",
          });
        });
    }
  };
  // render
  return (
    <div className="edit-menu-ewb-form">
      <EditForm
        menuWebData={menuWebData}
        setMenuWebData={setMenuWebData}
        editMenu={editMenu}
      />
    </div>
  );
}
// Componentes internos
function EditForm(props) {
  // props
  const { menuWebData, setMenuWebData, editMenu } = props;
  // render
  return (
    <Form className="form-edit" onSubmitCapture={editMenu}>
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
          prefix={<LinkOutlined style={{ color: "rgba(0,0,0, .25)" }} />}
          placeholder="URL"
          value={menuWebData.url}
          onChange={(e) =>
            setMenuWebData({ ...menuWebData, url: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar Menu
        </Button>
      </Form.Item>
    </Form>
  );
}

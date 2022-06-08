import React, { useState, useCallback, useEffect } from "react";
import {
  Avatar,
  Form,
  Input,
  Select,
  Button,
  Row,
  Col,
  notification,
} from "antd";
import { useDropzone } from "react-dropzone";
// Miscomponentes
import noAvatar from "../../../../assets/img/png/no-avatar.png";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import {
  getAvatarApi,
  uploadAvatarApi,
  updateUserApi,
} from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";
import "./editUserForm.scss";
// Inicio
export default function EditUserForm(props) {
  // props
  const { user, setIsVisibleModal, setReloadUsers } = props;
  // state
  const [avatar, setAvatar] = useState(null);
  const [userData, setUserData] = useState({});

  // effect
  useEffect(() => {
    if (avatar) {
      setUserData({ ...userData, avatar: avatar.file });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar]);
  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then((response) => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);
  useEffect(() => {
    setUserData({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    });
  }, [user]);
  // funciones
  const UpdateUser = (e) => {
    e.preventDefault();
    const token = getAccessTokenApi();
    let userUpdate = userData;
    if (userUpdate.password || userUpdate.repeatPassword) {
      if (userUpdate.password !== userUpdate.repeatPassword) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales",
        });
        return;
      } else {
        delete userUpdate.repeatPassword;
        setUserData({ ...userData, password: "", repeatPassword: "" });
      }
    }
    if (!userUpdate.name || !userUpdate.lastname || !userUpdate.email) {
      notification["error"]({
        message: "El nombre, apellidos y email son obligatorios",
      });
      return;
    }
    if (typeof userUpdate.avatar === "object") {
      uploadAvatarApi(token, userUpdate.avatar, user._id).then((response) => {
        userUpdate.avatar = response.avatarName;
        updateUserApi(token, userUpdate, user._id)
          .then((result) => {
            notification["success"]({
              message: result.msg,
            });
          })
          .finally(setIsVisibleModal(false), setReloadUsers(true));
      });
    } else {
      updateUserApi(token, userUpdate, user._id)
        .then((result) => {
          notification["success"]({
            message: result.msg,
          });
        })
        .finally(setIsVisibleModal(false), setReloadUsers(true));
    }
  };
  // render
  return (
    <div className="edit-user-form">
      <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
      <EditForm
        userData={userData}
        setUserData={setUserData}
        UpdateUser={UpdateUser}
      />
    </div>
  );
}
// componentes internos
function UploadAvatar(props) {
  // props
  const { avatar, setAvatar } = props;
  // state
  const [avatarUrl, setAvatarUrl] = useState(null);
  // effect
  useEffect(() => {
    if (avatar) {
      if (avatar.preview) {
        setAvatarUrl(avatar.preview);
      } else {
        setAvatarUrl(avatar);
      }
    } else {
      setAvatarUrl(null);
    }
  }, [avatar]);
  // useCallback
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setAvatar({ file, preview: URL.createObjectURL(file) });
    },
    [setAvatar]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    onDrop,
  });
  // render
  return (
    <div className="upload-avatar" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Avatar size={150} src={noAvatar} />
      ) : (
        <Avatar size={150} src={avatarUrl ? avatarUrl : noAvatar} />
      )}
    </div>
  );
}
function EditForm(props) {
  // props
  const { userData, setUserData, UpdateUser } = props;
  // render
  return (
    <Form className="form-edit" onSubmitCapture={UpdateUser}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0, .25)" }} />}
              placeholder="Nombre"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<UserOutlined style={{ color: "rgba(0,0,0, .25)" }} />}
              placeholder="Apellidos"
              value={userData.lastname}
              onChange={(e) =>
                setUserData({ ...userData, lastname: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<MailOutlined style={{ color: "rgba(0,0,0, .25)" }} />}
              placeholder="Correo"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Select
              placeholder="Selecciona un rol"
              onChange={(e) => setUserData({ ...userData, role: e })}
              value={userData.role}
              style={{ width: "100%" }}
            >
              <Select.Option value="admin">Administrador</Select.Option>
              <Select.Option value="editor">Editor</Select.Option>
              <Select.Option value="revisor">Revisor</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<LockOutlined style={{ color: "rgba(0,0,0, .25)" }} />}
              type="password"
              placeholder="Contraseña"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item>
            <Input
              prefix={<LockOutlined style={{ color: "rgba(0,0,0, .25)" }} />}
              type="password"
              placeholder="Repetir Contraseña"
              value={userData.repeatPassword}
              onChange={(e) =>
                setUserData({ ...userData, repeatPassword: e.target.value })
              }
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Actualizar Usuario
        </Button>
      </Form.Item>
    </Form>
  );
}

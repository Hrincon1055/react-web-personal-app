import React, { useState, useEffect } from "react";
import { Switch, List, Button, Modal as MoadalAntd, notification } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// Mis componentes
import {
  updateMenuApi,
  activateMenuApi,
  deleteMenuApi,
} from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";
import Modal from "../../../modal";
import AddMenuWebFrom from "../addMenuWebForm";
import EditMenuWebForm from "../editMenuWebForm";
import "./menuWebList.scss";
//? Inicio
export default function MenuWebList(props) {
  // props
  const { menu, setReloadMenuWeb } = props;
  // state
  // const [listItems, setListItems] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [listMenu, setListMenu] = useState([]);

  // effect
  useEffect(() => {
    setListMenu(menu);
  }, [menu]);

  // funciones
  const activateMenu = (menu, status) => {
    const token = getAccessTokenApi();
    activateMenuApi(token, menu._id, status).then((response) => {
      notification["success"]({
        message: response,
      });
    });
  };
  const editMenuWebModal = (menu) => {
    setIsVisibleModal(true);
    setModalTitle(`Editando menu ${menu.title}`);
    setModalContent(
      <EditMenuWebForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadMenuWeb={setReloadMenuWeb}
        menu={menu}
      />
    );
  };
  const reorder = (list, sourceIndex, destinationIndex, token) => {
    const result = [...list];
    const [removed] = result.splice(sourceIndex, 1);
    result.splice(destinationIndex, 0, removed);
    let tempOrder = result.map((item, i) => {
      return {
        active: item.active,
        order: i,
        title: item.title,
        url: item.url,
        _id: item._id,
      };
    });

    tempOrder.forEach((item) => {
      updateMenuApi(token, item._id, item);
    });
    return result;
  };
  const addMenuWebModal = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo menú");
    setModalContent(
      <AddMenuWebFrom
        setIsVisibleModal={setIsVisibleModal}
        setReloadMenuWeb={setReloadMenuWeb}
      />
    );
  };
  const deleteMenu = (menu) => {
    const token = getAccessTokenApi();
    MoadalAntd.confirm({
      title: "Eliminando menu",
      content: `Estás seguro de eliminar el menu ${menu.title}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deleteMenuApi(token, menu._id)
          .then((response) => {
            notification["success"]({
              message: response,
            });
            setReloadMenuWeb(true);
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor, Intentelo mas tarde.",
            });
          });
      },
    });
  };
  // render
  return (
    <div className="menu-web-list">
      <div className="menu-web-list__header">
        <Button type="primary" onClick={addMenuWebModal}>
          Crear menú
        </Button>
      </div>
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }

          const token = getAccessTokenApi();
          setListMenu((prevListItem) =>
            reorder(prevListItem, source.index, destination.index, token)
          );
        }}
      >
        <Droppable droppableId="menus">
          {(droppableProvided) => (
            <div
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="menu-web-list__items"
            >
              {listMenu.map((item, i) => (
                <Draggable key={item._id} draggableId={item._id} index={i}>
                  {(draggableProvided) => (
                    <div
                      className="menu-web-list__items-item"
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                    >
                      <MenuItem
                        item={item}
                        activateMenu={activateMenu}
                        editMenuWebModal={editMenuWebModal}
                        deleteMenu={deleteMenu}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  );
}
// Componentes internos
function MenuItem(props) {
  // props
  const { item, activateMenu, editMenuWebModal, deleteMenu } = props;
  // render
  return (
    <List.Item
      actions={[
        <Switch
          defaultChecked={item.active}
          onChange={(e) => activateMenu(item, e)}
        />,
        <Button type="primary" onClick={() => editMenuWebModal(item)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={() => deleteMenu(item)}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta title={item.title} description={item.url} />
    </List.Item>
  );
}

import React from "react";
import { Row, Col, Card } from "antd";
import {
  ClockCircleOutlined,
  KeyOutlined,
  MessageOutlined,
  UserOutlined,
  DollarOutlined,
  CheckOutlined,
} from "@ant-design/icons";
// Mis componentes
import "./howMyCoursesWork.scss";
// Inicio
export default function HowMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>¿Cómo funcionan mis cursos?</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
          enim autem? Perferendis quas quibusdam sequi.
        </h3>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-card">
          <Col md={8}>
            <CardInfo
              title="Cursos y Clasess"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente rerum perferendis doloribus? Autem error cupiditate doloribus repudiandae natus cumque?"
            >
              <ClockCircleOutlined />
            </CardInfo>
          </Col>
          <Col md={8}>
            <CardInfo
              title="Acceso 24/7"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente rerum perferendis doloribus? Autem error cupiditate doloribus repudiandae natus cumque?"
            >
              <KeyOutlined />
            </CardInfo>
          </Col>
          <Col md={8}>
            <CardInfo
              title="Aprendizaje colaborativo"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente rerum perferendis doloribus? Autem error cupiditate doloribus repudiandae natus cumque?"
            >
              <MessageOutlined />
            </CardInfo>
          </Col>
        </Row>
        <Row className="row-card">
          <Col md={8}>
            <CardInfo
              title="Mejora tu perfils"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente rerum perferendis doloribus? Autem error cupiditate doloribus repudiandae natus cumque?"
            >
              <UserOutlined />
            </CardInfo>
          </Col>
          <Col md={8}>
            <CardInfo
              title="Precios bajos"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente rerum perferendis doloribus? Autem error cupiditate doloribus repudiandae natus cumque?"
            >
              <DollarOutlined />
            </CardInfo>
          </Col>
          <Col md={8}>
            <CardInfo
              title="Certificados"
              subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sapiente rerum perferendis doloribus? Autem error cupiditate doloribus repudiandae natus cumque?"
            >
              <CheckOutlined />
            </CardInfo>
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}
// Componentes internos
function CardInfo(props) {
  const { title, subtitle, children } = props;
  return (
    <Card className="how-my-courses-work__card">
      {children}
      <Card.Meta title={title} description={subtitle}></Card.Meta>
    </Card>
  );
}

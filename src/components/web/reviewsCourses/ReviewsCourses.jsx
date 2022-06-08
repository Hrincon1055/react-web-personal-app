import React from "react";
import { Row, Col, Card, Avatar } from "antd";
// Mis componentes
import AvatarPersonam from "../../../assets/img/png/no-avatar.png";
import "./reviewsCourses.scss";
// Inicio
export default function ReviewsCourses() {
  return (
    <Row className="reviews-courses">
      <Row>
        <Col lg={4}></Col>
        <Col lg={16} className="reviews-courses__title">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            libero.
          </h2>
        </Col>
        <Col lg={4}></Col>
      </Row>
      <Row>
        <Col lg={4}></Col>
        <Col lg={16} className="row-cards">
          <Row>
            <Col md={8}>
              <CardReview
                name="Henry Rincon"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersonam}
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            libero"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Henry Rincon"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersonam}
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            libero"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Henry Rincon"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersonam}
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            libero"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <CardReview
                name="Henry Rincon"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersonam}
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            libero"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Henry Rincon"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersonam}
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            libero"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Henry Rincon"
                subtitle="Alumno de Udemy"
                avatar={AvatarPersonam}
                review="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            libero"
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </Row>
  );
}
// Componentes internos
function CardReview({ name, subtitle, avatar, review }) {
  return (
    <Card className="reviews-courses__card">
      <p>{review}</p>
      <Card.Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}

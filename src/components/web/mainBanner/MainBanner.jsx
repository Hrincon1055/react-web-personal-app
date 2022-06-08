import React from "react";
import { Row, Col } from "antd";
// Mis componentes
import "./mainBanner.scss";
// Inicio
export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="main-banner__dark">
        <Row>
          <Col lg={4}></Col>
          <Col lg={16}>
            <h2>
              Aprender nuevas <br /> tecnologías web y móvil
            </h2>
            <h3>
              A través de cursos prácticos, concisos y actualizados, creados por{" "}
              <br />
              profesionales con años de experiencias.
            </h3>
          </Col>
          <Col lg={4}></Col>
        </Row>
      </div>
    </div>
  );
}

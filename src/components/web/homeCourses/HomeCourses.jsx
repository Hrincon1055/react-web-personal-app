import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
// Mis componentes
import reactJsHooks from "../../../assets/img/jpg/react-js-hooks.jpg";
import cssGrid from "../../../assets/img/jpg/css-grid.jpg";
import javaScript from "../../../assets/img/jpg/javascript-es6.jpg";
import prestashop from "../../../assets/img/jpg/prestashop-1-7.jpg";
import reactNative from "../../../assets/img/jpg/react-native.jpg";
import wordpress from "../../../assets/img/jpg/wordpress.jpg";
import "./homeCourses.scss";
// Inicio
export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Aprende y mejora tus habilidades</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reactJsHooks}
              title="Curso React"
              subtitle="Intermedio - React"
              link="https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={cssGrid}
              title="Curso css grid"
              subtitle="Basico - css grid"
              link="https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={javaScript}
              title="Curso Javascript"
              subtitle="Intermedio - javaScript"
              link="https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={prestashop}
              title="Curso prestashop"
              subtitle="Intermedio - prestashop"
              link="https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={reactNative}
              title="Curso reactNative"
              subtitle="Intermedio - reactNative"
              link="https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={wordpress}
              title="Curso wordpress"
              subtitle="Intermedio - wordpress"
              link="https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="/courses">
          <Button>Ver más...</Button>
        </Link>
      </Col>
    </Row>
  );
}

// Componentes internos
function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>Ingresar</Button>]}
      >
        <Card.Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}

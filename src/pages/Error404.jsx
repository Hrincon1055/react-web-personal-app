import React from "react";
import { Result, Button } from "antd";

import { Link } from "react-router-dom";
//* Inicio
export default function Error404() {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to={"/admin"}>
            <Button type="primary">
              <span className="nav-text">Menu Web</span>
            </Button>
          </Link>
        }
      />
    </>
  );
}

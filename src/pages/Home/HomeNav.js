import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";

import "./HomeNav.css";

function HomeNav() {
  return (
    <Row className="justify-content-end home-nav">
      <Nav>
        <Link to="#">
          <h6>Login</h6>
        </Link>
        <Link to="#">
          <h6>Register</h6>
        </Link>
      </Nav>
    </Row>
  );
}

export default HomeNav;

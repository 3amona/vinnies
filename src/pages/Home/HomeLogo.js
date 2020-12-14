import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import homeLogo from "../../util/images/homeLogo.png";
import "./HomeLogo.css";

function HomeLogo() {
  return (
    <Row className="homeLogo">
      <Col>
        <img src={homeLogo} alt="Home Logo" className="homeLogo-image" />
        <Link to="/">
          <h1 className="homeLogo-text">VINNIES</h1>
        </Link>
      </Col>
    </Row>
  );
}

export default HomeLogo;

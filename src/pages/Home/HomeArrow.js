import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import homeArrow from "../../util/images/homeArrow.png";
import "./HomeArrow.css";

function HomeArrow() {
  const isSmall = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Row className= { isSmall? "justify-content-center":"justify-content-end"}>
      <Col xs={3} className="view-products">
        <Link to="#">
          <div>
            <h4>View Products</h4>
          </div>
          <div className="view-products-arrow">
            <img src={homeArrow} alt="arrow" />
          </div>
        </Link>
      </Col>
    </Row>
  );
}

export default HomeArrow;

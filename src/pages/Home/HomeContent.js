import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

import "./HomeContent.css";

function HomeContent() {
  return (
    <Row className="homeContent mx-auto">
      <Col>
        <p>
          where you can view Vinnies products and order what you wish to see on
          ebay with Vinnies <FontAwesomeIcon icon={faHeart} />
        </p>
      </Col>
    </Row>
  );
}

export default HomeContent;

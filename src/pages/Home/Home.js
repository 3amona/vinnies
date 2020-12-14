import React from "react";
import { Container } from "react-bootstrap";

import HomeNav from "./HomeNav";
import HomeLogo from "./HomeLogo";
import HomeContent from "./HomeContent";
import HomeArrow from "./HomeArrow";
import "./Home.css";

function Home() {
  return (
    <React.Fragment>
      <div className="background-image"></div>
      <Container>
        <HomeNav />
        <HomeLogo />
        <HomeContent />
        <HomeArrow />
      </Container>
    </React.Fragment>
  );
}

export default Home;

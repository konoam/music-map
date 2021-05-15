import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Map from "../components/map";
import ArtistsSideBar from "../components/ArtistsSideBar";
import "../styles/Home.css";

const HomePage = () => {
  return (
    <Container className="home-container">
      <Row>
        <Col md={6}>
          <Map />
        </Col>
        <Col>
          <ArtistsSideBar className="sideBar" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

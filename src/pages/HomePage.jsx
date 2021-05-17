//components
import Map from "../components/map";
import ArtistsSideBar from "../components/ArtistsSideBar";
import Filter from "../componentsFilter";
//design
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="home-container">
      <Row>
        <Col md={6}>
          <Map />
          <Filter />
        </Col>
        <Col>
          <ArtistsSideBar className="sideBar" />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

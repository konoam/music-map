import { useState, useEffect } from "react";
import api from "../api/artists";

//components
import Map from "../components/map";
import ArtistsSideBar from "../components/artistsSideBar";
import Filter from "../components/filter";
//design
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const retrieveArtists = async () => {
    const response = await api.get("/artists");
    return response.data;
  };

  useEffect(() => {
    const getAllArtists = async () => {
      const allArtists = await retrieveArtists();
      if (allArtists) setArtists(allArtists);
    };
    getAllArtists();
  }, []);

  useEffect(() => {}, [artists]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newArtistlist = artists.filter((a) => {
        return Object.values(a)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newArtistlist);
    } else {
      setSearchResults(artists);
    }
  };
  return (
    <Container className="home-container">
      <Row>
        <Col md={6}>
          <Map />
          <Filter />
        </Col>
        <Col>
          <ArtistsSideBar
            className="sideBar"
            artists={searchTerm < 1 ? artists : searchResults}
            term={searchTerm}
            searchKeyword={searchHandler}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

//hooks
import { useState, useEffect } from "react";
//data
import api from "../api/artists";
//components
import Map from "../components/map";
import ArtistsSideBar from "../components/artistsSideBar";
import Filter from "../components/filter";
//design
import "bootstrap/dist/css/bootstrap.min.css";

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
    <div className="container">
      <div className="row">
        <div className="col">
          <Map />
          <Filter />
        </div>
        <div className="col">
          <ArtistsSideBar
            className="sideBar"
            artists={searchTerm < 1 ? artists : searchResults}
            term={searchTerm}
            searchKeyword={searchHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

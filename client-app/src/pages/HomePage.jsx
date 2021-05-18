//hooks
import { useState, useEffect } from "react";
//data
import apiArists from "../api/db";
import apiGenres from "../api/db";
//components
import Map from "../components/map";
import ArtistsSideBar from "../components/artistsSideBar";
import Filter from "../components/filter";
//design
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = (props) => {

  const {locations} = props

  //states
  const [artists, setArtists] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //artists functions
  const retrieveArtists = async () => {
    const response = await apiArists.get("/artists");
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


//genres functions

const retrieveGenres = async () => {
    const response = await apiGenres.get("/genres");
    return response.data;

  };


  useEffect(() => {
    const getAllGenres = async () => {
      const allGenres = await retrieveGenres();
      if (allGenres) setGenres(allGenres);
    };
    getAllGenres();
  }, []);

  useEffect(() => {}, [genres]);








 
//search 
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



  //homepage renderding
  return (
    <div className="container">
      {/* {console.log(genres)} */}
      <div className="row">
        <div className="col">
          <Map locations={locations}/>
          
        </div>
        <div className="col">
           <Filter genres={genres}/>
          <Filter genres={genres}/>
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

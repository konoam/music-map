//child components
import Map from "../components/map";
import ArtistsSideBar from "../components/artistsSideBar";

//design
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = (props) => {

  const {artists,locations, selectedArtistsCB} = props
  

  



   const selectArtist = ({a})=> {
    console.log("select artists from homepage")
    selectedArtistsCB({a})
  }

  //homepage renderding
  return (
    <div className="container">
      {/* {console.log(genres)} */}
      <div className="row">
        <div className="col">
          <Map locations={locations} selectedArtistsCB={selectArtist}/>
          
        </div>
        <div className="col">
          <ArtistsSideBar
            artists={artists}  
            selectedArtistsCB={selectArtist}  
          />
         
        </div>
      </div>
    </div>
  );
};

export default HomePage;

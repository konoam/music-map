import React, { useState } from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import maracas from '../styles/maracas.svg'
import 'mapbox-gl/dist/mapbox-gl.css';

//To Do : filter artist list by clicking on location 


const Map = ({locations}) => {
  const [viewPort, setViewPort] = useState({
    latitude: -22.9032,
    longitude: -43.1735,
    zoom: 4,
    width: "70vw",
    height: "100vh",
  });

  const [selectedLoc,setSelectedLoc] = useState(null);


  return (
    <div>
      <ReactMapGL
        {...viewPort}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoia29ub2FtIiwiYSI6ImNrb3FydTcwczBkYjIydnA2ZmJtNGowZ24ifQ.wwF39UO0PuJRkBXrX0RyKw"
        }
        mapStyle="mapbox://styles/konoam/ckotx7iui003j17po1e8tzr99"
        onViewportChange={(viewPort)=>setViewPort(viewPort)}
      >
        {locations.map(location=>(
          <Marker key={location.id} latitude={location.lat} longitude={location.lng}>
              <button className="marker-button" onClick={
                (e)=>{
                  e.preventDefault();
                  setSelectedLoc(location);
                }}>
                <img src={maracas} alt="location mar"/>
                </button>
          </Marker>
        ))}
        {selectedLoc &&
        <Popup latitude={selectedLoc.lat} longitude={selectedLoc.lng}
        onClose={()=>
          setSelectedLoc(null)
        }
        ><div>{selectedLoc.name}</div></Popup>
        }
      </ReactMapGL>
    </div>
  );
};

export default Map;

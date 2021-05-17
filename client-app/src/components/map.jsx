import React, { useState } from "react";
import "../styles/Home.css";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewPort, setViewPort] = useState({
    latitude: -22.9032,
    longitude: -43.1735,
    zoom: 10,
    width: "100vw",
    height: "100vh",
  });

  return (
    <div>
      <ReactMapGL
        {...viewPort}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoia29ub2FtIiwiYSI6ImNrb3FydTcwczBkYjIydnA2ZmJtNGowZ24ifQ.wwF39UO0PuJRkBXrX0RyKw"
        }
        onViewportChange={setViewPort}
      >
        markrs here
      </ReactMapGL>
    </div>
  );
};

export default Map;

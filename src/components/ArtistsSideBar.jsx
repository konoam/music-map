import React from "react";
import { ListGroup } from "react-bootstrap";

const ArtistList = () => {
  const artists = [
    { id: "1", name: "Zeca" },
    { id: "2", name: "Arlindo" },
  ];

  return (
    <ListGroup>
      {/* {artists.map((a) => (
        <ListGroup.Item key={a.id}>{a.name}</ListGroup.Item>
      ))} */}
      <ListGroup.Item>{artists[0].name}</ListGroup.Item>
      <ListGroup.Item>{artists[1].name}</ListGroup.Item>
    </ListGroup>
  );
};

export default ArtistList;

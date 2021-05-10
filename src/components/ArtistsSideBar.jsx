import React from "react";

const ArtistList = ({ artists }) => {
  const artists = artists;

  return (
    <ListGroup>
      {artists.map((a) => (
        <ListGroup.Item key={a.index}>{a.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ArtistList;

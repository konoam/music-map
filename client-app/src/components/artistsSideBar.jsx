import React, { useRef } from "react";
import { ListGroup } from "react-bootstrap";

const ArtistList = (props) => {
  const inputEl = useRef("");
  const { artists } = props;

  // const renderArtistList = (artists) => {
  //   {
  //     artists.map((a) => <ListGroup.Item key={a.id}>{a.name}</ListGroup.Item>);
  //   }
  // };

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="main">
      <h2>Artists list</h2>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            // placeholder="Search Artisit"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
      
        </div>
      </div>
      <div >
        {artists.map((a) => (
          <ListGroup.Item key={a.id}>{a.name}</ListGroup.Item>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;

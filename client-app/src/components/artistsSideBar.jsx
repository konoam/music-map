
import {Link } from 'react-router-dom';
import { ListGroup, Button } from "react-bootstrap";

const ArtistList = (props) => {

  const {artists ,selectedArtistsCB } = props

  const selectArtist = ({a})=> {

    selectedArtistsCB({a})
  }

  return (
    <div className="main">
      <h2>Artists list</h2>
      
      <div >
        {artists.map((a) => (
          <ListGroup.Item key={a.id}>
            <Button onClick={()=>selectArtist({a})} >
              <Link to={`/artist/:${a.id}`}>
              {a.name}
              </Link>
              
            </Button>
            
            </ListGroup.Item>
        ))}
      </div>
    </div>
  );
};

export default ArtistList;

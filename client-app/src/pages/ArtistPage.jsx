import {useState} from 'react'
import {useParams} from "react-router-dom"
import {Card,Button } from "react-bootstrap"
import maracs from "../styles/maracas.svg"
// import {axios} from "../axios";

const Artist = ({currentArtist}) => {

    
  // const [currentArtist,setCurrentArtist] = useState[""]
    let { id } = useParams();
    
    // const getAllArtists = async()=>{
    //   const response = await axios.get(`/artists/${id}`).catch((err)=>console.log("Error: ",err))
    //   if(response && response.data) {
    //     setCurrentArtist(response.data)
       
    //   }
    // }

    console.log(id)

    return (  <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={maracs} />
                <Card.Body>
                    <Card.Title>{currentArtist.name}</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary" >Go somewhere</Button>
                </Card.Body>
            </Card>);
}
 
export default Artist;
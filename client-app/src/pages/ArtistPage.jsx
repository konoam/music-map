import {useParams} from "react-router-dom"
import {Card,Button } from "react-bootstrap"
import maracs from "../styles/maracas.svg"

const Artist = (props) => {

   

    let { id } = useParams();

    console.log(id)

    return (  <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={maracs} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary" >Go somewhere</Button>
                </Card.Body>
            </Card>);
}
 
export default Artist;
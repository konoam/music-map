import {useParams} from "react-router-dom"

const Artist = () => {

    let { id } = useParams();
console.log(id)

    return ( <div>artist</div> );
}
 
export default Artist;
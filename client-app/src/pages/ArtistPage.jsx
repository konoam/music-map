import { useState } from 'react';
import { useParams } from 'react-router-dom';

import maracs from '../styles/maracas.svg';
// import {axios} from "../axios";

const Artist = ({ currentArtist }) => {
      // const [currentArtist,setCurrentArtist] = useState[""]
      let { id } = useParams();

      // const getAllArtists = async()=>{
      //   const response = await axios.get(`/artists/${id}`).catch((err)=>console.log("Error: ",err))
      //   if(response && response.data) {
      //     setCurrentArtist(response.data)

      //   }
      // }

      console.log(id);

      return (
            <div style={{ width: '18rem' }}>
                  <img variant='top' src={maracs} />
                  <section>
                        <h2>{currentArtist.name}</h2>
                        <p>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                        </p>
                        <button variant='primary'>Go somewhere</button>
                  </section>
            </div>
      );
};

export default Artist;

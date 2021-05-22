import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import maracs from '../styles/maracas.svg';
import HeaderNavBar from '../components/headerNavbar';
import Artist from '../components/artist';
import { axios } from '../axios';

const ArtistPage = () => {
      let { id } = useParams();
      const [currentArtist, setCurrentArtist] = useState({});

      useEffect(() => {
            getSelectedArtists();
      }, []);

      console.log(id);
      const getSelectedArtists = async () => {
            const response = await axios
                  .get(`/artists/${id}`)
                  .catch((err) => console.log('Error: ', err));
            if (response && response.data) {
                  setCurrentArtist(response.data);
                  console.log(currentArtist);
            }
      };

      return (
            <div>
                  <header>
                        <HeaderNavBar handleText={'Back'} />
                  </header>
                  <Artist artist={currentArtist} />
            </div>
      );
};

export default ArtistPage;

import React, { useState, useEffect } from 'react';
import { axios } from './axios';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ArtistPage from './pages/ArtistPage';

const App = () => {
      const [artistsFull, setArtistsFull] = useState([]);
      const [locationsFull, setLocationsFull] = useState([]);

      const [searchTerm, setSearchTerm] = useState('');

      const [artistsResults, setArtistsResults] = useState([]);
      const [locationsResults, setLocationsResults] = useState([]);

      const [selectedArtist, setSelectedArtist] = useState(artistsFull[0]);

      //**** GET DATA  */
      const getAllArtists = async () => {
            const response = await axios
                  .get('/artists')
                  .catch((err) => console.log('Error: ', err));
            if (response && response.data) {
                  setArtistsFull(response.data);
                  setArtistsResults(response.data);
            }
      };
      const getAllLocations = async () => {
            const response = await axios
                  .get('/locations')
                  .catch((err) => console.log('Error: ', err));
            if (response && response.data) setLocationsFull(response.data);
      };

      useEffect(() => {
            getAllArtists();
            getAllLocations();
      }, []);

      const getLocationsList = () => {
            const locationsIdList = artistsResults.map((a) => a.location);
            const locationsToMark = locationsFull.filter((m) =>
                  locationsIdList.includes(m.id)
            );
            setLocationsResults(locationsToMark);
            console.log(locationsResults);
      };

      //return only artist with names that includes the input
      const searchHandler = () => {
            if (searchTerm !== '') {
                  const newArtistlist = artistsFull.filter((a) => {
                        return Object.values(a)
                              .join(' ')
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase());
                  });
                  setArtistsResults(newArtistlist);
                  //get distinct locations array from artistresults list
                  getLocationsList();
            } else {
                  setArtistsResults(artistsFull);
                  getLocationsList();
            }
      };
      const headerText = 'Admin';
      // go to artist page once artist selected

      useEffect(() => {
            console.log('link to this artist page', selectedArtist);
      }, [selectedArtist]);

      // const history = useHistory();
      // const goLoginPage = () => history.push('/login');

      const getInput = (inputTerm) => {
            setSearchTerm(inputTerm);
            searchHandler();
      };

      return (
            <div className='app'>
                  <HashRouter>
                        <main className='container'>
                              <Route exact path='/'>
                                    <HomePage
                                          artists={artistsResults}
                                          locations={locationsResults}
                                          selectedArtistsCB={setSelectedArtist}
                                          searchHandler={getInput}
                                    />
                              </Route>
                              <Route exact path='/login'>
                                    <LoginPage />
                              </Route>

                              <Route exact path='/artist/:id'>
                                    <ArtistPage />
                              </Route>
                        </main>
                  </HashRouter>
                  <footer className='footer'></footer>;
            </div>
      );
};

export default App;

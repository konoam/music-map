import React, { useState, useEffect, useRef } from 'react';
import { axios } from './axios';
import { HashRouter, Route, useHistory } from 'react-router-dom';

import HeaderNavbar from './components/headerNavbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ArtistPage from './pages/ArtistPage';
//To do : move the input to homepage or header or what ?

const App = () => {
      const [artistsFull, setArtistsFull] = useState([]);
      const [locationsFull, setLocationsFull] = useState([]);

      const [searchTerm, setSearchTerm] = useState('');
      const inputEl = useRef('');

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
            setSearchTerm(inputEl.current.value);

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

      const history = useHistory();
      const goLoginPage = () => history.push('/login');

      return (
            <div>
                  <header className='header'>
                        <HeaderNavbar
                              handleText={headerText}
                              handleAction={goLoginPage}
                        />
                        <input
                              ref={inputEl}
                              type='text'
                              className='prompt'
                              onChange={searchHandler}
                        />
                  </header>
                  <HashRouter>
                        <main className='page-container'>
                              <Route exact path='/'>
                                    <HomePage
                                          artists={artistsResults}
                                          locations={locationsResults}
                                          selectedArtistsCB={setSelectedArtist}
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

//  <>
//         <HeaderNavbar/>
//         <div>
//            <input
//             ref={inputEl}
//             type="text"
//             className="prompt"
//             onChange={searchHandler} />

//             <HomePage artists={artistsResults} locations={locationsResults} selectedArtistsCB={setSelectedArtist}/>

//         </div>
//         </>

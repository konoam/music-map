//child components
import HeaderNavbar from '../components/headerNavbar';
import Map from '../components/map';
import ArtistsSideBar from '../components/artistsSideBar';
import { useState, useEffect, useRef } from 'react';

const HomePage = (props) => {
      const { artists, locations, selectedArtistsCB, getInput } = props;
      const [input, setInput] = useState();
      const selectArtist = ({ a }) => {
            console.log('select artists from homepage');
            selectedArtistsCB({ a });
      };
      const headerText = 'Admin';
      const inputEl = useRef('');
      useEffect(() => {
            getInput(input);
      }, [input]);

      //homepage renderding
      return (
            <div>
                  <header>
                        <HeaderNavbar handleText={headerText} />

                        <div className='searchrow'>
                              <label className='input'> Search Artist</label>
                              <input
                                    ref={inputEl}
                                    type='text'
                                    onChange={() =>
                                          setInput(inputEl.current.value)
                                    }
                              />
                        </div>
                  </header>

                  <div className='container'>
                        {/* {console.log(genres)} */}

                        <div>
                              <Map
                                    locations={locations}
                                    selectedArtistsCB={selectArtist}
                              />
                        </div>
                        <div>
                              <ArtistsSideBar
                                    artists={artists}
                                    selectedArtistsCB={selectArtist}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default HomePage;

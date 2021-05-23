import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../styles/adminForms.css';

const AddingForm = () => {
      const api = Axios.create({
            baseURL: 'https://api.deezer.com/genre',
      });

      const [deezer, setDeezer] = useState([]);

      const getAllDeezers = async () => {
            const response = await api
                  .get('/75')
                  .catch((err) => console.log('Error: ', err));
            if (response && response.data) setDeezer(response.data);
      };

      useEffect(() => {
            getAllDeezers();
      }, []);
      useEffect(() => {
            console.log(deezer);
      }, [deezer]);

      return (
            <div>
                  <div>
                        <h1 className='brandFont'>New Artist</h1>
                        <form className='formContainer'>
                              <fieldset className='row'>
                                    <label>Name</label>
                                    <input
                                          type='text'
                                          name='name'
                                          placeholder='Enter Artits Name'
                                    ></input>
                              </fieldset>
                              <fieldset className='row'>
                                    <label>Location</label>
                                    <input
                                          type='text'
                                          name='location'
                                          placeholder='Enter Artits Location'
                                    ></input>
                              </fieldset>
                              <fieldset className='row'>
                                    <label>Genre</label>
                                    <input
                                          type='text'
                                          name='genre'
                                          placeholder='Enter Artits Genre'
                                    ></input>
                              </fieldset>
                              <button variant='primary' type='submit'>
                                    Submit
                              </button>
                              <button variant='worning' type='close'>
                                    Cancel
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default AddingForm;

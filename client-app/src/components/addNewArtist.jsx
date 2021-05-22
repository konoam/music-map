import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { axios } from '../axios';

// To Do :
//       1. add form validation
//       2. populate genres/location  select field list from db.js
//       3. css
//       4. add sucsses mesages
//

const AddNewArtist = ({ closeAddNewFormCB }) => {
      const [form, setForm] = useState({
            name: '',
            type: '',
            birth_name: '',
            location: '',
      });

      const postArtist = async (request) => {
            const response = await axios.post('/artists', request);
            console.log('exit');
      };

      const handleChange = (e) => {
            setForm({
                  ...form,
                  [e.target.name]: e.target.value,
            });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            const request = {
                  id: uuid(),
                  ...form,
            };
            postArtist(request);

            setForm({ name: '', type: '', birth_name: '', location: '' });
            closeAddNewFormCB();
      };

      return (
            <form>
                  <fieldset id='formGridName'>
                        <label>Name</label>
                        <input
                              placeholder='Enter Artits Name'
                              name='name'
                              onChange={handleChange}
                        />
                  </fieldset>

                  <fieldset id='formGridType'>
                        <label>Type</label>
                        <input
                              as='select'
                              defaultValue='Singer'
                              name='type'
                              onChange={handleChange}
                        >
                              <option>Singer</option>
                              <option>Compositors</option>
                              <option>Band</option>
                        </input>
                  </fieldset>

                  <fieldset id='formGridBirthName'>
                        <label>Birth Name</label>
                        <input name='birth_name' onChange={handleChange} />
                  </fieldset>

                  <fieldset id='formGridGenre'>
                        <label>Genre</label>
                        <input name='genre' onChange={handleChange} />
                  </fieldset>

                  <fieldset id='formGridCity'>
                        <label>City</label>
                        <input />
                  </fieldset>

                  <fieldset id='formGridState'>
                        <label>State</label>
                        <input as='select' defaultValue='Choose...'>
                              <option>Choose...</option>
                              <option>...</option>
                        </input>
                  </fieldset>

                  <button
                        variant='primary'
                        type='submit'
                        onClick={handleSubmit}
                  >
                        Submit
                  </button>
                  <button
                        variant='worning'
                        type='close'
                        onClick={() => closeAddNewFormCB}
                  >
                        Cancel
                  </button>
            </form>
      );
};

export default AddNewArtist;
//

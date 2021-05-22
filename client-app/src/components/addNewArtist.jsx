import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Form, Col, Button, Row } from 'react-bootstrap';
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
            <Form>
                  <Row>
                        <Form.Group as={Col} controlId='formGridName'>
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                    placeholder='Enter Artits Name'
                                    name='name'
                                    onChange={handleChange}
                              />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formGridType'>
                              <Form.Label>Type</Form.Label>
                              <Form.Control
                                    as='select'
                                    defaultValue='Singer'
                                    name='type'
                                    onChange={handleChange}
                              >
                                    <option>Singer</option>
                                    <option>Compositors</option>
                                    <option>Band</option>
                              </Form.Control>
                        </Form.Group>
                  </Row>

                  <Form.Group controlId='formGridBirthName'>
                        <Form.Label>Birth Name</Form.Label>
                        <Form.Control
                              name='birth_name'
                              onChange={handleChange}
                        />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridGenre'>
                        <Form.Label>Genre</Form.Label>
                        <Form.Control name='genre' onChange={handleChange} />
                  </Form.Group>

                  <Row>
                        <Form.Group as={Col} controlId='formGridCity'>
                              <Form.Label>City</Form.Label>
                              <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formGridState'>
                              <Form.Label>State</Form.Label>
                              <Form.Control
                                    as='select'
                                    defaultValue='Choose...'
                              >
                                    <option>Choose...</option>
                                    <option>...</option>
                              </Form.Control>
                        </Form.Group>
                  </Row>

                  <Button
                        variant='primary'
                        type='submit'
                        onClick={handleSubmit}
                  >
                        Submit
                  </Button>
                  <Button
                        variant='worning'
                        type='close'
                        onClick={() => closeAddNewFormCB}
                  >
                        Cancel
                  </Button>
            </Form>
      );
};

export default AddNewArtist;
//

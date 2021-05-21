import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Form, Col, Button, Row } from 'react-bootstrap';
import { axios } from '../axios';

const AddNewArtist = ({ closeAddNewFormCB }) => {
      const [name, setName] = useState('');
      const [birthName, setbirthName] = useState('');
      const [genre, setGenre] = useState('');
      const [city, setCity] = useState('');

      const addArtistHandler = () => {
            console.log(name);
      };

      return (
            <Form>
                  <h1>{name}</h1>
                  <Row>
                        <Form.Group as={Col} controlId='formGridName'>
                              <Form.Label>Name</Form.Label>
                              <Form.Control
                                    placeholder='Enter Artits Name'
                                    onChange={(e) => setName(e.target.value)}
                              />
                        </Form.Group>

                        <Form.Group as={Col} controlId='formGridType'>
                              <Form.Label>Type</Form.Label>
                              <Form.Control as='select' defaultValue='Singer'>
                                    <option>Singer</option>
                                    <option>Compositors</option>
                                    <option>Band</option>
                              </Form.Control>
                        </Form.Group>
                  </Row>

                  <Form.Group controlId='formGridBirthName'>
                        <Form.Label>Birth Name</Form.Label>
                        <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId='formGridGenre'>
                        <Form.Label>Genre</Form.Label>
                        <Form.Control />
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
                        onClick={() => addArtistHandler}
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

import React, { useState } from 'react';
import AddNewArtist from '../components/addNewArtist';
import { axios } from '../axios';

const AdminPage = ({ handleLogout }) => {
      const [addNew, setAddNew] = useState(false);

      const closeAddNewForm = () => {
            setAddNew(false);
      };

      return (
            <div className='container'>
                  <h1>Admin Page</h1>

                  <div>
                        {addNew ? (
                              <AddNewArtist
                                    closeAddNewFormCB={closeAddNewForm}
                              />
                        ) : (
                              <button
                                    onClick={() => setAddNew(true)}
                                    style={{ width: '100px' }}
                              >
                                    Create New Artist
                              </button>
                        )}
                  </div>
            </div>
      );
};

export default AdminPage;

// id="formGridCheckbox"

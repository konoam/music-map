import React, { useState } from 'react';
import AddNewArtist from '../components/addNewArtist';
import { axios } from '../axios';

const AdminPage = () => {
      const [addNew, setAddNew] = useState(false);

      const closeAddNewForm = () => {
            setAddNew(false);
      };

      return (
            <div>
                  <h1>Admin Page</h1>
                  <div>
                        {addNew ? (
                              <AddNewArtist
                                    closeAddNewFormCB={closeAddNewForm}
                              />
                        ) : (
                              <button onClick={() => setAddNew(true)}>
                                    Create New Artist
                              </button>
                        )}
                  </div>
            </div>
      );
};

export default AdminPage;

// id="formGridCheckbox"

import React, { useState } from 'react';
import AddNewArtist from '../components/addNewArtist';
import HeaderNavBar from '../components/headerNavbar';
// import { axios } from '../axios';

const AdminPage = ({ handleAction }) => {
      const [addNew, setAddNew] = useState(false);

      const closeAddNewForm = () => {
            setAddNew(false);
      };

      return (
            <div className='ContainerAdmin'>
                  <header>
                        <HeaderNavBar
                              handleText={'Logout'}
                              handleAction={handleAction}
                        />

                        <h1 className='searchrow'>Admin Page</h1>
                  </header>

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

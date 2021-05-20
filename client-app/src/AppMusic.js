//hooks
import { useState, useEffect } from "react";
import { HashRouter,  Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

//components
import LoginPage from "./pages/LoginPage";
import HeaderNavBar from "./components/headerNavbar";
// import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";



//data
import apiLocations from "./api/db";
import apiArists from "./api/db";
import apiGenres from "./api/db";

//***********APP COMPONENT  *********

const App = () => {
//states
const [locations, setLocations] = useState([]);
// const [artists, setArtists] = useState([]);
// const [genres, setGenres] = useState([]);

//location functions
  const retrieveLocations = async () => {
    const response = await apiLocations.get("/locations");
    return response.data;
  };

  useEffect(() => {
    const getAllLocations = async () => {
      const allLocations = await retrieveLocations();
      if (allLocations) setLocations(allLocations);
    };
    getAllLocations();
  }, []);

  useEffect(() => {}, [locations]);

  return (
    <div>
       <header className="header">
 <HeaderNavBar/>
 </header>
<HashRouter>

  <main className="page-container">  
      <Route  exact path="/"   >
        <HomePage locations={locations}/>
        </Route>
      <Route exact path="/login">
        <LoginPage/>
        </Route>  

<Route exact path="/artist/:id">
        <ArtistPage/>
        </Route>  

  </main>
</HashRouter>
<footer className="footer"></footer>;
    
    </div>
  );
};

export default App;



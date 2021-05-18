import LoginPage from "./pages/LoginPage";
import HeaderNavBar from "./components/headerNavbar";
// import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,  Route } from 'react-router-dom';
//hooks
import { useState, useEffect } from "react";
//data
import apiLocations from "./api/db";

const App = () => {

const [locations, setLocations] = useState([]);

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



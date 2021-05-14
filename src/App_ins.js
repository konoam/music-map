import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { HashRouter, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import RecipesPage from "./pages/RecipesPage";
import HomePage from "./pages/HomePage";
import ArtistsNavbar from "./components/ArtistsNavbar";
import { Container } from "react-bootstrap";
import usersJSON from "./data/users.json";
import artistsJSON from "./data/artists.json";
// App is the main component for our Recipe app
// State:
// activeUser: Either null, if no user is logged in, or a user object if a user is logged in

class App extends React.Component {
  constructor(props) {
    super(props);

    // 1) When adding new recipes, we updated localStorage.localRecipes, to have all the previous recipes
    // plus the new one. We saved this informaition as a string
    // 2) When loading the page: We check if we have localStorage info.
    // if we have, we use the localStorage info and ignore the json
    // if we don't, we simply use the JSON data

    let artistsData = [];

    if (localStorage.localRecipes) {
      artistsData = JSON.parse(localStorage.localartists);
    } else {
      artistsData = artistsJSON;
    }

    let usersData = [];
    if (localStorage.localUsers) {
      usersData = JSON.parse(localStorage.localUsers);
    } else {
      usersData = usersJSON;
    }

    this.state = {
      allUsers: usersData,
      allartists: usersData,
      //activeUser: null
      activeUser: {
        id: 1,
        name: "Yaron",
        email: "skarlinski@gmail.com",
        pwd: "123",
      },
    };
  }
  addUser = (newUser) => {
    const localUsersString = JSON.stringify(
      this.state.allUsers.concat(newUser)
    );
    localStorage.localUsers = localUsersString;
    this.setState({
      activeUser: newUser,
      allUsers: this.state.allUsers.concat(newUser),
    });
  };

  addArtist = (newArtist) => {
    //NewRecipe is an object with
    // name, desc, img, userId, id
    const localArtistsString = JSON.stringify(
      this.state.allArtists.concat(newArtist)
    );
    console.log(localArtistsString);
    localStorage.localArtists = localArtistsString;

    this.setState({
      allArtists: this.state.allArtists.concat(newArtist),
    });
  };
  login = (userObj) => {
    this.setState({
      activeUser: userObj,
    });
  };
  logout = () => {
    this.setState({
      activeUser: null,
    });
  };
  render() {
    return (
      <HashRouter>
        <Route exact path={["/", "/recipes"]}>
          <ArtistsNavbar
            activeUser={this.state.activeUser}
            logout={this.logout}
          />
        </Route>
        <Container>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          {/* <Route exact path="/recipes">
            <RecipesPage
              activeUser={this.state.activeUser}
              allRecipes={this.state.allRecipes}
              addRecipe={this.addRecipe}
            ></RecipesPage>
          </Route> */}
          {/* <Route exact path="/login">
            <Login allUsers={this.state.allUsers} login={this.login} />
          </Route> */}
          {/* <Route exact path="/signup">
            <Signup addUser={this.addUser} />
          </Route> */}
        </Container>
      </HashRouter>
    );
  }
}

export default App;

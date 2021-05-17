import HeaderNavBar from "./components/headerNavbar";
// import HomePage from "./pages/HomePage";
import LoginPage from "./pages/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      {/* <header className="header">
        <HeaderNavBar />
      </header> */}
      <LoginPage />

      <footer className="footer"></footer>
    </div>
  );
};

export default App;

// import AdminPage from "./pages/HomePage";
// <Router>
//   <main className="page-container">
//     <Switch>
//       <Route path="/" component={HomePage} exact={true} />
//       <Route path="/login" component={LoginPage} />
//       <Route path="/admin" component={AdminPage} />
//       <Route path="/artist" component={ArtistPage} exact={true} />
//     </Switch>
//   </main>
// </Router>;

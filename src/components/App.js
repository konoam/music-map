// import Artist from "./components/Artist";
// import HeaderNavBar from "./components/HeaderNavbar";
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route path="/signup" component={Signup} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;

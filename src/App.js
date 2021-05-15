import HeaderNavBar from "./components/HeaderNavbar";
import HomePage from "./pages/HomePage";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

const App = () => {
  return (
    <Container>
      <header className="header">
        <HeaderNavBar />
      </header>
      <main className="page-container">
        <HomePage />
      </main>

      <footer className="footer"></footer>
    </Container>
  );
};

export default App;

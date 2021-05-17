import { Navbar, Button } from "react-bootstrap";

const HeaderNavBar = () => {
  const goToLogin = () => {};

  return (
    <Navbar bg="light" variant="light" className="p-4">
      <Navbar.Brand href="#home">Welcome To Music-Map</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {/* if user then :<Navbar.Text>
          Signed in as: <a href="#login">Maria Rita</a>
        </Navbar.Text> else :*/}

        <Button bsStyle="primary" on Clock={goToLogin}>
          Admin
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNavBar;

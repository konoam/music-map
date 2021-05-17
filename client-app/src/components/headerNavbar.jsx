import { Navbar } from "react-bootstrap";

const HeaderNavBar = () => {
  return (
    <Navbar bg="light" variant="light" className="p-4">
      <Navbar.Brand href="#home">Welcome To Music-Map</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Maria Rita</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNavBar;

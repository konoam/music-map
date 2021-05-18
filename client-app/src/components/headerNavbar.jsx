import { Navbar, Button ,Form} from "react-bootstrap";

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
 <Form inline>
 <Button bsStyle="primary" 
 href="/#/login"
 className=" mr-sm-2">
          Admin
        </Button>
 </Form>
       
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderNavBar;

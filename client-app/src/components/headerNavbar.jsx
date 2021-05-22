import { Navbar, Button, Form } from 'react-bootstrap';

const HeaderNavBar = (props) => {
      const { handleText, handleAction } = props;
      // const goToLogin = () => {
      //       href = '/#/login';
      // };
      console.log(handleText);
      return (
            <Navbar bg='light' variant='light' className='p-4'>
                  <Navbar.Brand href='#home'>Welcome To Music-Map</Navbar.Brand>
                  <Navbar.Toggle />
                  <Navbar.Collapse className='justify-content-end'>
                        <Form inline>
                              <Button
                                    bsStyle='primary'
                                    className=' mr-sm-2'
                                    onClick={handleAction}
                              >
                                    {handleText}
                              </Button>
                        </Form>
                  </Navbar.Collapse>
            </Navbar>
      );
};

export default HeaderNavBar;

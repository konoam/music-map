import { Link } from 'react-router-dom';
const HeaderNavBar = (props) => {
      const { handleText, handleAction } = props;

      const selectButton = () => {
            switch (handleText) {
                  case 'Logout':
                        return (
                              <button className='link' onClick={handleAction}>
                                    {handleText}
                              </button>
                        );
                  case 'Admin':
                        return (
                              <button>
                                    <Link to='/login' className='link'>
                                          {handleText}
                                    </Link>
                              </button>
                        );
                  case 'Back':
                        return (
                              <button>
                                    <Link to='/' className='link'>
                                          {handleText}
                                    </Link>
                              </button>
                        );
                  default:
                        return null;
            }
      };

      return (
            <nav className='container'>
                  <div className='brandFont'>
                        <a href='/'>Music-Map</a>
                  </div>

                  <div>{selectButton()}</div>
            </nav>
      );
};

export default HeaderNavBar;

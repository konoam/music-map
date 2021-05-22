const HeaderNavBar = (props) => {
      const { handleText, goToLink, handleAction } = props;

      console.log(handleText);

      return (
            <nav className='container'>
                  <div className='brandFont'>
                        <a href='/'>Music-Map</a>
                  </div>

                  <div>
                        <button
                              href={goToLink}
                              bsStyle='primary'
                              className=' mr-sm-2'
                              onClick={handleAction}
                        >
                              {handleText}
                        </button>
                  </div>
            </nav>
      );
};

export default HeaderNavBar;

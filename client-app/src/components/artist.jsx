import maracs from '../styles/maracas.svg';

const Artist = ({ artist }) => {
      return (
            <div style={{ width: '18rem' }}>
                  <img variant='top' src={maracs} />
                  <section>
                        <h2>{artist.name}</h2>
                        <p>{artist.bio}</p>
                        <button>Go to WebSite</button>
                  </section>
            </div>
      );
};

export default Artist;

import maracs from '../styles/maracas.svg';
const Artist = ({ artist }) => {
      return (
            <div style={{ width: '18rem' }}>
                  <img variant='top' src={maracs} />
                  <section>
                        <h2>{artist.name}</h2>
                        <p>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                        </p>
                        <button variant='primary'>Go somewhere</button>
                  </section>
            </div>
      );
};

export default Artist;

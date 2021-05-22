import { Link } from 'react-router-dom';
//To Do : 1. display default top 5

const ArtistList = (props) => {
      const { artists, selectedArtistsCB } = props;

      const selectArtist = ({ a }) => {
            selectedArtistsCB({ a });
      };

      return (
            <div className='main'>
                  <h2 className='brandFont'>Artists list</h2>

                  <nav>
                        {artists.map((a) => (
                              <ul key={a.id}>
                                    <button onClick={() => selectArtist({ a })}>
                                          <Link
                                                className='link'
                                                to={`/artist/${a.id}`}
                                          >
                                                {a.name}
                                          </Link>
                                    </button>
                              </ul>
                        ))}
                  </nav>
            </div>
      );
};

export default ArtistList;

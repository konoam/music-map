const Artist = () => {
  // const [Artist, setArtist] = useState(initialState)

  return (
    <section className="bg-dark">
      <div className="container">
        <div className="split">
          <div>
            <img src="https://picsum.photos/200" alt="gallery" />
          </div>

          <div>
            <h2>Artist Name</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              mollitia reiciendis consectetur nesciunt animi vero sequi error
              corrupti suscipit ratione?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;

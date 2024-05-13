/** @format */
// styles are in index.css

import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

const SingleFilmPage = () => {
  const [item, setItem] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getFilm();
  }, []);

  const getFilm = () => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films/${id}`)
      .then(response => response.json())
      .then(result => setItem(result))
      .catch(error => console.error("Error fetching film:", error));
  };

  return (
    <div>
      <div>
        <div className="singleFilmLinks">
          <Link to="/films">Back to Films</Link>
          <Link to="/">Home</Link>
        </div>
        <img
          className="film-poster"
          src={`${item.image}`}
          alt={`${item.title} Poster`}
        />
      </div>
      <div className="singleFilmContent">
        <h1 className="singleFilmTitle">{item.title}</h1>
        <p>
          Directed by {item.director}. Produced by {item.producer}.
        </p>
        <p className="singleFilmP">
          The film was released in <strong>{item.release_date}</strong> and
          garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
          <a
            className="rottenTomatoes"
            href="https://www.rottentomatoes.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rotten Tomatoes
          </a>
          .
        </p>
        <h2 className="singleFilmDescription">Description</h2>
        <p className="descriptionP">{item.description}</p>
      </div>
    </div>
  );
};

export default SingleFilmPage;

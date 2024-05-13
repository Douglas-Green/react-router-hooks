/** @format */

import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getFilmStats} from "../helpers/films.helper.js";

const FilmsPage = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = () => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then(response => response.json())
      .then(result => setList(result))
      .catch(error => console.error("Error fetching films:", error));
  };

  const {avg_score, total, latest} = getFilmStats(list);

  return (
    <div>
      <Link className="filmsPageLink" to="/">Home</Link>
      <div>
        <span># Of Films</span>
        <span>{total}</span>
      </div>
      <div>
        <span>Average Rating</span>
        <span>{avg_score.toFixed(2)}</span>
      </div>
      <div>
        <span>Latest Film</span>
        <span>{latest}</span>
      </div>
      <ul>
        {list.map(film => (
          <li key={film.id}>
            <Link to={`film/${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmsPage;

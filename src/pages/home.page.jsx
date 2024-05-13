/** @format */

import {Link} from "react-router-dom";
import "./HomePage.css"; 

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Welcome to Ghibli Studios</h1>
      </header>
      <main>
        <p>
          Explore our collection of films and learn more about Ghibli Studios.
        </p>
        <nav>
          <Link
            to="/"
            className="home-link"
          >
            Home
          </Link>
          <Link
            to="/films"
            className="films-link"
          >
            Films
          </Link>
        </nav>
      </main>
    </div>
  );
};

export default HomePage;

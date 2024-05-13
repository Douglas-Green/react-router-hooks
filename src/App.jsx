/** @format */

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {HomePage, FilmsPage, SingleFilmPage} from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/films"
          element={<FilmsPage />}
        />
        <Route
          path="/films/film/:id"
          element={<SingleFilmPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;

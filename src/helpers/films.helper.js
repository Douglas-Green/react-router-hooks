/** @format */

export const getFilmStats = list => {
  const total = list.length;
  const acc_score = list.reduce((sum, film) => sum + Number(film.rt_score), 0);
  const avg_score = total ? acc_score / total : 0;
  const latest = Math.max(...list.map(film => Number(film.release_date)));

  return {
    acc_score,
    avg_score,
    total,
    latest,
  };
};

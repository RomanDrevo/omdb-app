import axios_based from "./axios-base";

export function fetchMoviesListApi(data) {

  const params = {
    s: data,
  };

  return axios_based.get(
    ``, {params}
  );
}

export function fetchMovieDetailsApi(data) {

  const params = {
    plot: "full",
    t:data,
  };

  return axios_based.get(
    ``, {params}
  );
}






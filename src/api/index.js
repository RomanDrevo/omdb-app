import axios_based from "./axios-base";

export function fetchMovieApi(data) {

  const params = {
    s: data,
    t:data
  };

  console.log(data);
  return axios_based.get(
    ``, {params}
  );
}






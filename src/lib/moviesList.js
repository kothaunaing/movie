import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function getMovies(url, page) {
  const options = {
    method: "GET",
    url,
    params: {
      include_adult: "false",
      include_null_first_air_dates: "false",
      language: "en-US",
      page: page || "1",
      sort_by: "popularity.desc",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const response = await axios.request(options);

  return response.data;
}

export async function getMovieById(url) {
  const options = {
    method: "GET",
    url,
    params: {
      language: "en-US",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  const response = await axios.request(options);
  return response.data;
}

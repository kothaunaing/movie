import axios from "axios";

export async function getMovies(url) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const options = {
    method: "GET",
    url,
    params: {
      include_adult: "false",
      include_null_first_air_dates: "false",
      language: "en-US",
      page: "1",
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

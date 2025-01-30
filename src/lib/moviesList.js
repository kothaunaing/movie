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

  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    console.log("Error in getMovies: " + error.message);

    return null;
  }
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

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error in getMovieById: " + error.message);
    return null;
  }
}

export async function getImagesById(url) {
  const options = {
    method: "GET",
    url,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("Error in getImagesById: " + error.message);
    return null;
  }
}

import { getMovies, searchMovie } from "../../../lib/moviesList";
import React from "react";
import Movie from "./Movie";
import Pagination from "./Pagination";

const Movies = async ({ newData, title, seeMorePath, url, page, query }) => {
  try {
    let data;

    if (url) {
      data = await getMovies(url, page);
    } else if (newData) {
      data = newData;
    }

    const movies = data?.results;

    return (
      <div>
        <h1 className="flex gap-3">
          <span className="font-bold text-xl" id={"movies"}>
            {title}
          </span>
        </h1>
        <div
          style={{ scrollbarWidth: "none" }}
          className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4  justify-center"
        >
          {movies.map((movie) => {
            return (
              <Movie
                seeMorePath={seeMorePath}
                key={movie.id}
                movie={movie}
                className={"w-full"}
                imageClass={"w-full"}
              />
            );
          })}
        </div>
        <Pagination query={query} data={data} seeMorePath={seeMorePath} />
      </div>
    );
  } catch (error) {
    return <div className="text-center text-red-600">Error fetching data</div>;
  }
};

export default Movies;

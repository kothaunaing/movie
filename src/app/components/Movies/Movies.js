import { getMovies } from "../../../lib/moviesList";
import React from "react";
import Movie from "./Movie";

const Movies = async ({ title, seeMorePath, url }) => {
  const data = await getMovies(url);
  const movies = data?.results;

  console.log(data);

  return (
    <div>
      <h1 className="flex gap-3">
        <span className="font-bold">{title}</span>
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
    </div>
  );
};

export default Movies;

import { getMovieGenresList, getMoviesByGenreId } from "@/lib/moviesList";
import React from "react";
import MoviesPreviews from "../Movies/MoviesPreviews";

const Movies = async ({ genre, genreURL, seeMorePath }) => {
  const data = await getMoviesByGenreId(genreURL, genre.id);

  return (
    <MoviesPreviews
      showLink
      seeMorePath={`${seeMorePath}/genres/${genre.id}-${genre.name}`}
      title={genre.name}
      newData={data}
      basePath={seeMorePath}
    />
  );
};

const Genres = async ({ url, title, genreURL, seeMorePath }) => {
  const data = await getMovieGenresList(url);

  return (
    <div>
      <h1 className="font-bold text-lg mb-4">{title}</h1>
      <div className="space-y-6">
        {data.genres.map((genre) => {
          return (
            <Movies
              seeMorePath={seeMorePath}
              key={genre.id}
              genre={genre}
              genreURL={genreURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Genres;

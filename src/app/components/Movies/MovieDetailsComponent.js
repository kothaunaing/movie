import Link from "next/link";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/original";

const Details = ({ movie }) => {
  return (
    <div className="mt-2">
      <h1 className="md:hidden font-bold text-2xl   p-2">
        {movie?.title || movie?.name}
      </h1>
      <div className="font-bold text-center">
        <span>{movie.release_date.split("-")[0]}</span>
        <span className="ml-2">{movie.runtime}m</span>
      </div>
      <div className="space-x-2">
        {movie.genres.map((genre) => {
          return (
            <Link
              className="hover:underline hover:drop-shadow-md"
              key={genre.id}
              href={`/genres/${genre.name}`}
            >
              {genre.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const MovieDetailsComponent = ({ movie }) => {
  return (
    <div className="md:grid md:grid-cols-2 relative p-2">
      <div className="mt-4 flex flex-col items-center ">
        <img
          src={baseURL + movie.poster_path}
          className="h-[250px]  object-fit rounded-lg"
        />
        <Details movie={movie} />
      </div>
      <div className="mt-4">
        <h1 className="font-bold text-xl mb-3">Overview</h1>
        <p>{movie.overview}</p>
      </div>
      <div className="absolute inset-0 z-[-1] bg-black/50 backdrop-blur-sm" />
      <img
        className=" w-full h-full object-cover object-top fixed inset-0 z-[-2] shadow-md shadow-black rounded-md"
        src={baseURL + movie.backdrop_path}
      />
    </div>
  );
};

export default MovieDetailsComponent;

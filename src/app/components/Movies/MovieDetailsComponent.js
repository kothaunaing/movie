import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { formatMinuteToHour, formatDate } from "@lib/utils";
import MovieImages from "./MovieImages";
import Cast from "./Cast";

const baseURL = "https://image.tmdb.org/t/p/original";

const Details = ({ movie, className }) => {
  return (
    <div className={clsx("mt-2 ", className)}>
      <h1 className="font-bold text-2xl text-center md:text-left">
        {movie?.name || movie?.title}
      </h1>
      <div className="font-bold text-center md:text-left">
        <span>
          {formatDate(movie.release_date).year} {" • "}{" "}
        </span>
        <span className="">{formatMinuteToHour(movie.runtime)}</span>
      </div>
      <div className="space-x-2 text-center md:text-left">
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
      <p className="text-center italic mt-2 text-gray-400 md:text-left">
        {movie.tagline}
      </p>
    </div>
  );
};

const MovieDetailsComponent = ({ movie, tab }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-[-1] bg-black/50 backdrop-blur-sm" />
      <div className="md:grid md:grid-cols-2  p-2">
        <div className="mt-4 flex flex-col items-center ">
          <img
            src={baseURL + movie.poster_path}
            className="h-[250px] object-fit rounded-lg shadow-md shadow-white/40"
          />
          <Details movie={movie} className={"md:hidden"} />
        </div>

        <div className="mt-4 md:mt-0 ">
          <Details movie={movie} className={"hidden md:block"} />
          <h1 className="font-bold text-xl mb-3 md:mt-4">Overview</h1>
          <p>{movie.overview}</p>
        </div>

        <img
          className=" w-full h-full object-cover object-top fixed inset-0 z-[-2] shadow-md shadow-black rounded-md "
          src={baseURL + movie.backdrop_path}
        />
      </div>
      <div>
        <MovieImages
          tab={tab}
          url={`https://api.themoviedb.org/3/movie/${movie.id}/images`}
        />
      </div>
      <div className="mt-4">
        <Cast url={`https://api.themoviedb.org/3/movie/${movie.id}/credits`} />
      </div>
    </div>
  );
};

export default MovieDetailsComponent;

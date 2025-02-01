import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { formatMinuteToHour, formatDate } from "@lib/utils";
import MovieImages from "./MovieImages";
import Cast from "./Cast";
import MoviesPreviews from "./MoviesPreviews";
import Videos from "./Videos";
import { formatMoney, getLanguageFullName, prettyDate } from "lib/utils";

const baseURL = "https://image.tmdb.org/t/p/original";

const Details = ({ movie, className }) => {
  return (
    <div className={clsx("mt-2 ", className)}>
      <h1 className="font-bold text-2xl text-center md:text-left mb-1">
        {movie?.name || movie?.title}
      </h1>
      <div className="font-bold text-center md:text-left mb-2">
        <span>
          {formatDate(movie.release_date).year} {" • "}{" "}
        </span>
        <span className="">{formatMinuteToHour(movie.runtime)}</span>
      </div>
      <p className="space-x-2 md:text-left w-full text-center break-words">
        {movie.genres.map((genre) => {
          return (
            <Link
              className="hover:underline hover:drop-shadow-md"
              key={genre.id}
              href={`/movies/genres/${genre.id}-${encodeURIComponent(
                genre.name
              )}`}
            >
              {genre.name}
            </Link>
          );
        })}
      </p>
      <p className="text-center italic mt-2 text-gray-400 md:text-left">
        {movie.tagline}
      </p>
    </div>
  );
};

const MovieDetailsComponent = ({ movie, tab }) => {
  console.log(movie);
  return (
    <div className="relative">
      <div className="absolute inset-0 z-[-1] bg-black/50 backdrop-blur-sm" />
      <div className="md:grid md:grid-cols-2  p-2">
        <div className="mt-4 flex flex-col items-center ">
          <div className="relative">
            {movie.poster_path ? (
              <img
                src={baseURL + movie.poster_path}
                className="h-[250px] w-full object-fit rounded-lg shadow-md shadow-white/40"
              />
            ) : (
              <div
                className={clsx(
                  "flex justify-center items-center h-[250px] w-full"
                )}
              >
                No image
              </div>
            )}
            <div className="absolute bottom-2 right-2 z-10">
              {movie?.vote_average ? (
                <span className="bg-black/70 font-bold p-2 rounded-full size-10">
                  {movie.vote_average.toFixed("1")}/10
                </span>
              ) : null}
            </div>
          </div>
          <Details movie={movie} className={"md:hidden"} />
        </div>

        <div className="mt-4 md:mt-0 ">
          <Details movie={movie} className={"hidden md:block"} />
          {movie.overview ? (
            <div>
              <h1 className="font-bold text-xl mb-3 md:mt-4">Overview</h1>
              <p>{movie.overview}</p>
            </div>
          ) : null}
          <div className="mt-4 space-y-3">
            <div>
              <p className="font-bold text-xl">Status</p>
              <p>
                {movie.status} ({prettyDate(movie?.release_date)})
              </p>
            </div>
            <div>
              <p className="font-bold text-xl">Original Language</p>
              <p>{getLanguageFullName(movie.original_language)}</p>
            </div>
            {movie?.original_language ? (
              <div>
                <p className="font-bold text-xl">Original Language</p>
                <p>{getLanguageFullName(movie.original_language)}</p>
              </div>
            ) : null}
            {movie?.budget ? (
              <div>
                <p className="font-bold text-xl">Budget</p>
                <p>{formatMoney(movie?.budget)}</p>
              </div>
            ) : null}
            {movie?.revenue ? (
              <div>
                <p className="font-bold text-xl">Revenue</p>
                <p>{formatMoney(movie?.revenue)}</p>
              </div>
            ) : null}
            {movie?.homepage ? (
              <div>
                <p className="font-bold text-xl">Website </p>
                <Link
                  className="break-words underline text-blue-400"
                  href={movie.homepage}
                >
                  {movie.homepage}
                </Link>
              </div>
            ) : null}
          </div>
        </div>

        {movie.backdrop_path && (
          <img
            className=" w-full h-full object-cover object-top fixed inset-0 z-[-2] shadow-md shadow-black rounded-md "
            src={baseURL + movie.backdrop_path}
          />
        )}
      </div>
      <div>
        <MovieImages
          tab={tab}
          url={`https://api.themoviedb.org/3/movie/${movie.id}/images`}
        />
      </div>
      <div className="mt-9 m-2">
        <Videos url={`https://api.themoviedb.org/3/movie/${movie.id}/videos`} />
      </div>
      <div className="mt-4">
        <Cast url={`https://api.themoviedb.org/3/movie/${movie.id}/credits`} />
      </div>
      <div className="mt-9 m-2">
        <MoviesPreviews
          title={"Similar Movies"}
          url={`https://api.themoviedb.org/3/movie/${movie.id}/similar`}
          seeMorePath={"/movies"}
          basePath={"/movies"}
        />
      </div>
      <div className="mt-9 m-2">
        <MoviesPreviews
          title={"Recommended Movies"}
          url={`https://api.themoviedb.org/3/movie/${movie.id}/recommendations`}
          seeMorePath={"/movies"}
          basePath={"/movies"}
        />
      </div>
    </div>
  );
};

export default MovieDetailsComponent;

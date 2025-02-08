import Link from "next/link";
import React from "react";
import MovieImages from "./MovieImages";
import Cast from "./Cast";
import clsx from "clsx";
import MoviesPreviews from "./MoviesPreviews";
import Videos from "./Videos";
import { convertToKabaeCase, getLanguageFullName } from "lib/utils";
import Seasons from "../Seasons/Seasons";

const baseURL = "https://image.tmdb.org/t/p/original";

const Networks = ({ networks }) => {
  if (networks?.length) {
    return (
      <div>
        <p className="font-bold text-xl">Networks</p>
        <ul className="space-y-2">
          {networks.map((network) => {
            return (
              <li key={network.name + network.logo_path}>
                <p className="">{network.name}</p>
                {network.logo_path && (
                  <img
                    alt={network.name}
                    src={baseURL + network.logo_path}
                    className="h-6"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

const CreatedBy = ({ createdBy }) => {
  if (createdBy?.length) {
    return (
      <div>
        <p className="font-bold text-xl">Created By</p>
        <ul className="space-y-2">
          {createdBy.map((c) => {
            return (
              <li key={c.name + c.credit_id}>
                <p className="">{c.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

const TVShowsDetailsComponent = ({ movie }) => {
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
                  "flex justify-center items-center h-[250px] w-[160px] rounded-md border"
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
              <p className="font-bold text-xl">Original Name</p>
              <p>{movie.original_name}</p>
            </div>
            <div>
              <p className="font-bold text-xl">Status</p>
              <p>{movie.status}</p>
            </div>

            <Networks networks={movie?.networks} />

            {movie?.type ? (
              <div>
                <p className="font-bold text-xl">Type</p>
                <p>{movie.type}</p>
              </div>
            ) : null}

            {movie?.original_language ? (
              <div>
                <p className="font-bold text-xl">Original Language</p>
                <p>{getLanguageFullName(movie.original_language)}</p>
              </div>
            ) : null}

            <CreatedBy createdBy={movie.created_by} />
            {movie?.homepage ? (
              <div>
                <p className="font-bold text-xl">Website</p>
                <Link
                  className="break-words text-blue-400 underline"
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
            className=" w-full h-full object-cover object-top fixed inset-0 z-[-2] shadow-md shadow-black rounded-md bg-scroll "
            src={baseURL + movie.backdrop_path}
          />
        )}
      </div>
      <div>
        <Seasons movie={movie} />
        <MovieImages
          url={`https://api.themoviedb.org/3/tv/${movie.id}/images`}
        />
      </div>
      <div className="mt-9 m-2">
        <Videos url={`https://api.themoviedb.org/3/tv${movie.id}/videos`} />
      </div>
      <div className="mt-4">
        <Cast url={`https://api.themoviedb.org/3/tv/${movie.id}/credits`} />
      </div>
      <div className="mt-9 m-2">
        <MoviesPreviews
          title={"Similar TV shows"}
          url={`https://api.themoviedb.org/3/tv/${movie.id}/similar`}
          seeMorePath={"/tvshows"}
          basePath={"/tvshows"}
        />
      </div>
      <div className="mt-9 m-2">
        <MoviesPreviews
          title={"Recommended TV shows"}
          url={`https://api.themoviedb.org/3/tv/${movie.id}/recommendations`}
          seeMorePath={"/tvshows"}
          basePath={"/tvshows"}
        />
      </div>
    </div>
  );
};

const Details = ({ movie, className }) => {
  return (
    <div className={clsx("mt-2", className)}>
      <h1 className="font-bold text-2xl text-center md:text-left">
        {movie?.name || movie?.title}
      </h1>
      <div className="font-bold text-center md:text-left mb-2">
        <span className="">
          {movie.number_of_seasons}{" "}
          {movie.number_of_seasons <= 1 ? "season" : "seasons"}
        </span>
        <span className="ml-2">
          {movie.number_of_episodes}{" "}
          {movie.number_of_episodes <= 1 ? "episode" : "episodes"}
        </span>
      </div>
      <div className="space-x-2 text-center md:text-left break-words">
        {movie.genres.map((genre) => {
          return (
            <Link
              className="hover:underline hover:drop-shadow-md"
              key={genre.id}
              href={`/tvshows/genres/${genre.id}-${encodeURIComponent(
                genre.name
              )}`}
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

export default TVShowsDetailsComponent;

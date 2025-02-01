import { convertToKabaeCase } from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/original";

const MovieInfo = ({ movie }) => {
  return (
    <div>
      <div className="relative h-[150px] md:h-[250px] lg:h-[300px]">
        {movie.poster_path ? (
          <img
            src={baseURL + movie.backdrop_path}
            className="h-full w-full object-cover object-center rounded-lg "
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
        <div className="absolute top-2 left-2 z-10  rounded-md bg-black/70 p-2">
          <Link
            href={`/tvshows/m/${movie.id}-${convertToKabaeCase(movie.name)}`}
            className="font-bold  hover:underline cursor-pointer"
          >
            {movie.name}
          </Link>
          <p className="text-sm italic">{movie.number_of_seasons} Seasons</p>
          <p className="text-sm italic">{movie.number_of_episodes} Episodes</p>
        </div>
        <div className="absolute bottom-2 right-2 z-10">
          {movie?.vote_average ? (
            <span className="bg-black/70 font-bold p-2 rounded-full size-10">
              {movie.vote_average.toFixed("1")}/10
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;

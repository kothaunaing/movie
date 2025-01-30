import clsx from "clsx";
import Link from "next/link";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/w780";

const Movie = ({ movie, seeMorePath, className, imageClass }) => {
  console.log(movie);

  return (
    <div className={clsx("group relative overflow-hidden", className)}>
      <div className="absolute bottom-2 right-2 z-10">
        <span className="bg-black/70 p-2 rounded-full size-10">
          {(movie.vote_average * 10).toFixed("0")}%
        </span>
      </div>
      <Link href={seeMorePath + "/sm/" + movie.id}>
        <img
          className={clsx(
            "rounded-md group-hover:scale-[1.5] transition-transform duration-150",
            imageClass
          )}
          alt={movie?.name || movie?.title}
          src={baseURL + movie.poster_path}
        />
        <div className="absolute hidden inset-0 group-hover:flex bg-black/60 justify-center p-2">
          <div>
            <p className="font-bold">{movie?.name || movie?.title}</p>
            <p className="text-sm">{movie.overview.slice(0, 70)}...</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;

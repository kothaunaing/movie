import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/w500";

const Movie = ({ movie, seeMorePath, className, imageClass }) => {
  return (
    <div className={clsx("group relative overflow-hidden", className)}>
      <Link href={seeMorePath + "/" + movie.id}>
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

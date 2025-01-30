"use client";
import clsx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useSlider from "lib/useSlider";

const baseURL = "https://image.tmdb.org/t/p/w780";

export const MovieSlider = ({ movies, seeMorePath }) => {
  const {
    sliderRef,
    scrollLeft,
    scrollRight,
    showLeftButton,
    showRightButton,
  } = useSlider();

  return (
    <div className="relative">
      {showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 bottom-[50%] z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all translate-y-[50%]"
        >
          <ChevronLeftIcon />
        </button>
      )}
      <div
        ref={sliderRef}
        style={{ scrollbarWidth: "none" }}
        className="mt-4 flex overflow-x-auto md:overflow-auto space-x-4 scrollbar-hide  gap-1 "
      >
        {movies.map((movie) => {
          return (
            <Movie
              className={"flex-shrink-0"}
              seeMorePath={seeMorePath}
              key={movie.id}
              movie={movie}
              imageClass={"h-[230px]"}
            />
          );
        })}
      </div>
      {showRightButton && (
        <button
          onClick={scrollRight}
          className="absolute right-0 bottom-[50%] z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all translate-y-[50%]"
        >
          <ChevronRightIcon />
        </button>
      )}
    </div>
  );
};

const Movie = ({ movie, seeMorePath, className, imageClass }) => {
  return (
    <div className={clsx("group relative overflow-hidden", className)}>
      <div className="absolute bottom-2 right-2 z-10">
        <span className="bg-black/70 font-bold p-2 rounded-full size-10">
          {(movie.vote_average * 10).toFixed("0")}%
        </span>
      </div>
      <Link href={seeMorePath + "/sm/" + movie.id}>
        <Image
          className={clsx(
            "rounded-md group-hover:scale-[1.5] transition-transform duration-150 object-fit ",
            imageClass
          )}
          height={230}
          width={150}
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

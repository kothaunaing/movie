"use client";
import clsx from "clsx";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useSlider from "lib/useSlider";

const baseURL = "https://image.tmdb.org/t/p/w500";

export const MovieSlider = ({ movies, seeMorePath, basePath }) => {
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
        {movies.map((movie, index) => {
          return (
            <Movie
              className={"flex-shrink-0"}
              seeMorePath={basePath}
              key={movie.id + (movie?.name || movie?.title) + index}
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
  const isMovie = movie?.media_type === "movie";
  const path = isMovie ? "/movies" : "/tvshows";

  const convertToKabaeCase = (text) => {
    if (text) {
      const arr = text.split(" ");
      return arr.join("-");
    }
  };

  return (
    <div className={clsx("group relative overflow-hidden", className)}>
      <div className="absolute bottom-2 right-2 z-10">
        {movie?.vote_average ? (
          <span className="bg-black/70 font-bold p-2 rounded-full size-10">
            {movie.vote_average.toFixed("1")}/10
          </span>
        ) : null}
      </div>
      <Link
        href={
          movie?.media_type
            ? path +
              "/m/" +
              movie.id +
              `-${convertToKabaeCase(
                movie?.name?.toLowerCase() || movie?.title.toLowerCase()
              )}`
            : seeMorePath +
              "/m/" +
              movie.id +
              `-${convertToKabaeCase(
                movie?.name?.toLowerCase() || movie?.title.toLowerCase()
              )}`
        }
      >
        {/* <Image
          loading="lazy"
          className={clsx(
            "rounded-md group-hover:scale-[1.5] transition-transform duration-150 object-fit ",
            imageClass
          )}
          height={230}
          width={150}
          alt={movie?.name || movie?.title}
          src={baseURL + movie.poster_path}
        /> */}
        {movie.poster_path ? (
          <img
            className={clsx(
              "rounded-md group-hover:scale-[1.5] transition-transform duration-150 object-fit ",
              imageClass
            )}
            height={230}
            width={150}
            alt={movie?.name || movie?.title}
            src={baseURL + movie.poster_path}
          />
        ) : (
          <div
            className={clsx(
              "flex justify-center items-center w-[150px] border rounded-md",
              imageClass
            )}
          >
            No image
          </div>
        )}

        <div className="absolute hidden inset-0 group-hover:flex bg-black/60 justify-center p-2">
          <div>
            <p className="font-bold">{movie?.name || movie?.title}</p>
            {<p className="text-sm">{movie?.overview?.slice(0, 70)}...</p>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Movie;

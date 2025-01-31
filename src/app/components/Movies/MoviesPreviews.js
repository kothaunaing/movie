import { getMovies } from "../../../lib/moviesList";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Movie, { MovieSlider } from "./Movie";

const MoviesPreviews = async ({
  newData,
  title,
  url,
  basePath,
  seeMorePath,
  showLink,
}) => {
  try {
    let data;

    if (url) {
      data = await getMovies(url);
    } else {
      data = newData;
    }
    const movies = data?.results || data?.cast;

    return (
      <section className="">
        <h1 className="flex gap-3">
          <span className="font-bold">{title}</span>
          {showLink && (
            <Link className="flex gap-1 items-center" href={seeMorePath}>
              See more
              <ChevronRightIcon className="size-5" />
            </Link>
          )}
        </h1>
        {/* <div
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
        </div> */}
        <MovieSlider
          seeMorePath={seeMorePath}
          basePath={basePath}
          movies={movies}
        />
      </section>
    );
  } catch (error) {
    console.log("Error in Movies: " + error.message);
    return (
      <div className="m-4 text-center text-red-700">Error fetching data</div>
    );
  }
};

export default MoviesPreviews;

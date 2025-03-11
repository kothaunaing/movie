import { getMovies } from "../../../lib/moviesList";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { MovieSlider } from "./Movie";

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

    if (movies?.length) {
      return (
        <section className="">
          <h1 className="flex gap-3">
            <span className="font-bold text-xl">{title}</span>
            {showLink && (
              <Link className="flex gap-1 items-center" href={seeMorePath}>
                See more
                <ChevronRightIcon className="size-5" />
              </Link>
            )}
          </h1>

          <MovieSlider
            seeMorePath={seeMorePath}
            basePath={basePath}
            movies={movies}
          />
        </section>
      );
    }
  } catch (error) {
    console.log("Error in Movies: " + error.message);
    return (
      <div className="m-4 text-center text-red-700">Error fetching data</div>
    );
  }
};

export default MoviesPreviews;

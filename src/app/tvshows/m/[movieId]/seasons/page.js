import { getMovieById } from "@/lib/moviesList";
import React from "react";
import MovieInfo from "./components/MovieInfo";
import SeasonsComponent from "./components/SeasonsComponent";

const Seasons = async ({ params }) => {
  const { movieId } = await params;
  const movie = await getMovieById(
    `https://api.themoviedb.org/3/tv/${movieId}`
  );

  console.log(movie);

  if (movie) {
    return (
      <main className="max-w-4xl mx-auto">
        <div className="m-2">
          <MovieInfo movie={movie} />
          <div className="mt-4">
            <SeasonsComponent movie={movie} />
          </div>
        </div>
      </main>
    );
  } else {
    return <div className="text-center text-red-600">Error fetching data</div>;
  }
};

export default Seasons;

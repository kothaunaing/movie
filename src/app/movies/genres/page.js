import Genres from "@/app/components/Genres/Genres";
import React from "react";

export async function generateMetadata() {
  return {
    title: "ZFlix | Movie Genres",
    description: "ZFlix | Movie Genres",
  };
}

const MovieGenres = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <Genres
          url={"https://api.themoviedb.org/3/genre/movie/list"}
          genreURL={"https://api.themoviedb.org/3/discover/movie"}
          title={"Movie Genres"}
          seeMorePath="/movies"
        />
      </div>
    </main>
  );
};

export default MovieGenres;

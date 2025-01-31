import Genres from "@/app/components/Genres/Genres";
import React from "react";

export async function generateMetadata() {
  return {
    title: "ZFlix | TV Genres",
    description: "ZFlix | TV Genres",
  };
}

const MovieGenres = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <Genres
          url={"https://api.themoviedb.org/3/genre/tv/list"}
          genreURL={"https://api.themoviedb.org/3/discover/tv"}
          title={"TV Genres"}
          seeMorePath="/tvshows"
        />
      </div>
    </main>
  );
};

export default MovieGenres;

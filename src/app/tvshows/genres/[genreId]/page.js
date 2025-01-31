import Movies from "@/app/components/Movies/Movies";
import { getMoviesByGenreId } from "@/lib/moviesList";
import React from "react";

export async function generateMetadata({ params }) {
  const { genreId } = await params;

  const genreName = decodeURIComponent(genreId.split("-")[1]);

  return {
    title: "ZFlix |TV Genres | " + genreName,
    description: "ZFlix | TV Genres | " + genreName,
  };
}

const SingleGenre = async ({ params, searchParams }) => {
  const { genreId } = await params;
  const { page } = await searchParams;

  const genreName = decodeURIComponent(genreId.split("-")[1]);

  const data = await getMoviesByGenreId(
    "https://api.themoviedb.org/3/discover/tv",
    genreId,
    page
  );

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <Movies
          title={genreName}
          newData={data}
          page={page}
          seeMorePath={"/tvshows"}
        />
      </div>
      \
    </main>
  );
};

export default SingleGenre;

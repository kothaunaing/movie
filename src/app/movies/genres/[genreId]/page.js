import Movies from "@/app/components/Movies/Movies";
import NotFound from "@/app/components/Movies/NotFound";
import { getMoviesByGenreId } from "@/lib/moviesList";
import React from "react";

export async function generateMetadata({ params }) {
  const { genreId } = await params;

  const genreName = decodeURIComponent(genreId.split("-")[1]);

  return {
    title: "ZFlix | Movie Genres | " + genreName,
    description: "ZFlix | Movie Genres | " + genreName,
  };
}

const SingleGenre = async ({ params, searchParams }) => {
  const { genreId } = await params;
  const { page } = await searchParams;

  const genreName = decodeURIComponent(genreId.split("-")[1]);

  const data = await getMoviesByGenreId(
    "https://api.themoviedb.org/3/discover/movie",
    genreId,
    page
  );

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        {data && data.results.length ? (
          <Movies
            title={genreName}
            newData={data}
            page={page}
            seeMorePath={"/movies"}
          />
        ) : (
          <NotFound>
            <p>No Genre found!</p>
          </NotFound>
        )}
      </div>
    </main>
  );
};

export default SingleGenre;

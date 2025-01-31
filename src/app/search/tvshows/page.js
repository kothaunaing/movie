import React from "react";
import Movies from "../../components/Movies/Movies";
import { searchMovie } from "@/lib/moviesList";
import NotFound from "@/app/components/Movies/NotFound";

export async function generateMetadata({ searchParams }) {
  const { page, query } = await searchParams;

  let title = "";

  if (query) {
    title = page
      ? `Search TV shows | Results for ${query} | Page ${page} `
      : `Search TV shows | Results for ${query}`;
  } else {
    title = "ZFlix | Search TV shows";
  }

  return {
    title,
    description: title,
  };
}

const Search = async ({ searchParams }) => {
  const { page, query } = await searchParams;

  const data = await searchMovie(
    "https://api.themoviedb.org/3/search/tv",
    page,
    query
  );

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        {data && data?.results?.length ? (
          <div>
            <Movies
              title={
                <p>
                  Results For <span className="italic">{query}</span>{" "}
                </p>
              }
              newData={data}
              page={page}
              seeMorePath={"/tvshows"}
              query={query}
            />
          </div>
        ) : (
          <NotFound>
            <p>
              No results found for <span className="italic bold">{query}</span>
            </p>
          </NotFound>
        )}
      </div>
    </main>
  );
};

export default Search;

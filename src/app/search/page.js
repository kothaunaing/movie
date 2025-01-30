import React from "react";
import Movies from "../components/Movies/Movies";

export async function generateMetadata({ searchParams }) {
  const { page, query } = await searchParams;

  return {
    title: query ? `Results for ${query} | Page ${page}` : "ZFlix | Search",
    description: page
      ? `Results for ${query} | Page ${page}`
      : "ZFlix | Search",
  };
}

const Search = async ({ searchParams }) => {
  const { page, query } = await searchParams;

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <Movies
          title={
            <p>
              Results For <span className="italic">{query}</span>{" "}
            </p>
          }
          page={page}
          url={"https://api.themoviedb.org/3/search/movie"}
          seeMorePath={"/movies"}
          query={query}
        />
      </div>
    </main>
  );
};

export default Search;

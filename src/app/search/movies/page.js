import React from "react";
import Movies from "../../components/Movies/Movies";

export async function generateMetadata({ searchParams }) {
  const { page, query } = await searchParams;

  let title = "";

  if (query) {
    title = page
      ? `Results for ${query} | Page ${page} `
      : `Results for ${query}`;
  } else {
    title = "ZFlix | Search";
  }

  return {
    title,
    description: title,
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
          url={"https://api.themoviedb.org/3/search/multi"}
          seeMorePath={"/movies"}
          query={query}
        />
      </div>
    </main>
  );
};

export default Search;

import Pagination from "@/app/components/Movies/Pagination";
import People from "@/app/components/People/People";
import { searchPeople } from "@/lib/moviesList";
import React from "react";

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

const SearchPeople = async ({ searchParams }) => {
  const { page, query } = await searchParams;
  const data = await searchPeople(
    "https://api.themoviedb.org/3/search/person",
    page,
    query
  );

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <h1 className="font-bold text-lg">
          <p>
            Results For <span className="italic">{query}</span>{" "}
          </p>
        </h1>
        <div className="mt-4">
          <People people={data.results} />
        </div>
        <Pagination data={data} query={query} />
      </div>
    </main>
  );
};

export default SearchPeople;

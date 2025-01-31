import NotFound from "@/app/components/Movies/NotFound";
import Pagination from "@/app/components/Movies/Pagination";
import People from "@/app/components/People/People";
import { searchPeople } from "@/lib/moviesList";
import React from "react";

export async function generateMetadata({ searchParams }) {
  const { page, query } = await searchParams;

  let title = "";

  if (query) {
    title = page
      ? `Search People | Results for ${query} | Page ${page} `
      : `Search People | Results for ${query}`;
  } else {
    title = "ZFlix | Search People";
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
        {data && data?.results?.length ? (
          <div>
            <h1 className="font-bold text-xl">
              <p>
                Results For <span className="italic">{query}</span>{" "}
              </p>
            </h1>
            <div className="mt-4">
              <People people={data.results} />
            </div>
            <Pagination data={data} query={query} />
          </div>
        ) : (
          <NotFound>
            <p>
              No results found for{" "}
              <span className="italic font-bold">{query}</span>
            </p>
          </NotFound>
        )}
      </div>
    </main>
  );
};

export default SearchPeople;

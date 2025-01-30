import { getPopularPeople } from "@/lib/moviesList";
import React from "react";
import People from "../components/People/People";
import Pagination from "../components/Movies/Pagination";

export async function generateMetadata({ searchParams }) {
  const { page } = await searchParams;

  return {
    title: page
      ? `ZFlix | Popular People | Page ${page}`
      : "ZFlix | Popular People",
    description: page
      ? `ZFlix | Popular People | Page ${page}`
      : "ZFlix | Popular People",
  };
}

const PopularPeople = async ({ searchParams }) => {
  const { page } = await searchParams;
  const data = await getPopularPeople(
    "https://api.themoviedb.org/3/person/popular",
    page
  );

  console.log(data);

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <h1 className="font-bold text-lg">Popular People</h1>
        <div className="mt-4">
          <People people={data.results} />
        </div>
        <Pagination data={data} />
      </div>
    </main>
  );
};

export default PopularPeople;

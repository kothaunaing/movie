import React from "react";
import Movies from "../components/Movies/Movies";

export async function generateMetadata({ searchParams }) {
  const { page } = await searchParams;

  return {
    title: page ? `TV shows | Page ${page}` : "ZFlix | TV Shows",
    description: "Explore TV shows",
  };
}

const TVShows = async ({ searchParams }) => {
  const { page } = await searchParams;

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <Movies
          title={"TV shows"}
          page={page}
          url={"https://api.themoviedb.org/3/discover/tv"}
          seeMorePath={"/tvshows"}
        />
      </div>
    </main>
  );
};

export default TVShows;

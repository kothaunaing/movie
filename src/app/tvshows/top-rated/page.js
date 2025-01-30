import Movies from "@/app/components/Movies/Movies";
import React from "react";

export async function generateMetadata({ searchParams }) {
  const { page } = await searchParams;

  return {
    title: page ? `TV shows | Page ${page}` : "ZFlix | Top Rated TV shows",
    description: "Explore TV shows",
  };
}

const TVShows = async ({ searchParams }) => {
  const { page } = await searchParams;

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <Movies
          title={"Top Rated TV shows"}
          page={page}
          url={"https://api.themoviedb.org/3/tv/top_rated"}
          seeMorePath={"/tvshows"}
        />
      </div>
    </main>
  );
};

export default TVShows;

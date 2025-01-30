import Movies from "@/app/components/Movies/Movies";
import React from "react";

export async function generateMetadata({ searchParams }) {
  const { page } = await searchParams;

  return {
    title: page ? `Movies | Page ${page}` : "ZFlix | Upcoming Movies",
    description: "Explore movies",
  };
}

const NowPlaying = async ({ searchParams }) => {
  const { page } = await searchParams;

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <Movies
          title={"Upcoming Movies"}
          page={page}
          url={"https://api.themoviedb.org/3/movie/upcoming"}
          seeMorePath={"/movies"}
        />
      </div>
    </main>
  );
};

export default NowPlaying;

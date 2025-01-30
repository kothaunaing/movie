import React from "react";
import Movies from "../components/Movies/Movies";

export async function generateMetadata({ searchParams }) {
  const { page } = await searchParams;

  return {
    title: page ? `Movies | Page ${page}` : "ZFlix | Movies",
    description: "Explore movies",
  };
}

const MoviesType = async ({ searchParams }) => {
  const { page } = await searchParams;

  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <Movies
          title={"Popular Movies"}
          page={page}
          url={"https://api.themoviedb.org/3/discover/movie"}
          seeMorePath={"/movies"}
        />
      </div>
    </main>
  );
};

export default MoviesType;

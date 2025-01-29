import React from "react";
import Movies from "../components/Movies/Movies";

const MoviesType = async () => {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="m-2">
        <Movies
          title={"Movies"}
          url={"https://api.themoviedb.org/3/discover/movie"}
          seeMorePath={"/movies"}
        />
      </div>
    </main>
  );
};

export default MoviesType;

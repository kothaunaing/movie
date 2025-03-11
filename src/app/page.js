import MoviesPreviews from "./components/Movies/MoviesPreviews";

export default function Home() {
  return (
    <div>
      <main className="max-w-4xl mx-auto">
        <div className="m-2 space-y-8">
          <MoviesPreviews
            title={"Trending"}
            url={"https://api.themoviedb.org/3/trending/all/day"}
            showLink
            seeMorePath={"/trending"}
          />
          <MoviesPreviews
            title={"Top Movies"}
            url={"https://api.themoviedb.org/3/movie/popular"}
            seeMorePath={"/movies"}
            showLink
            basePath={"/movies"}
          />
          <MoviesPreviews
            title={"Top TV"}
            url={"https://api.themoviedb.org/3/tv/popular"}
            seeMorePath={"/tvshows"}
            basePath={"/tvshows"}
            showLink
          />
        </div>
      </main>
    </div>
  );
}

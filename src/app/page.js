import MoviesPreviews from "./components/Movies/MoviesPreviews";

export default function Home() {
  return (
    <div>
      <main className="max-w-4xl mx-auto">
        <div className="m-2 space-y-8">
          <MoviesPreviews
            title={"Top TV"}
            url={"https://api.themoviedb.org/3/discover/tv"}
            seeMorePath={"/tvshows"}
          />

          <MoviesPreviews
            title={"Top Movies"}
            url={"https://api.themoviedb.org/3/discover/movie"}
            seeMorePath={"/movies"}
          />
        </div>
      </main>
    </div>
  );
}

import Header from "./components/Header/Header";
import HorizontalMovieScroll from "./components/Movies/Movie";
import Movies from "./components/Movies/Movies";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto">
        <div className="m-2">
          <Movies />
          {/* <HorizontalMovieScroll /> */}
        </div>
      </main>
    </div>
  );
}

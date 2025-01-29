import { getMovieById } from "../../../lib/moviesList";
import MovieDetailsComponent from "../../components/Movies/MovieDetailsComponent";

export async function generateMetadata({ params }) {
  const { movieId } = await params;
  const movie = await getMovieById(
    `https://api.themoviedb.org/3/movie/${movieId}`
  );

  return {
    title: "ZFlix Movies | " + movie.title,
    description: "ZFlix Movies | " + movie.title,
  };
}

const MovieDetails = async ({ params }) => {
  try {
    const { movieId } = await params;
    const movie = await getMovieById(
      `https://api.themoviedb.org/3/movie/${movieId}`
    );

    return (
      <div className="max-w-3xl mx-auto">
        <div className="">
          <MovieDetailsComponent movie={movie} />
        </div>
      </div>
    );
  } catch (error) {
    console.log("Error in MovieDetails: " + error.message);
    return <div className="text-center text-red-600">Error fetching data</div>;
  }
};

export default MovieDetails;

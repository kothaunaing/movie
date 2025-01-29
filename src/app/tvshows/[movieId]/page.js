import TVShowsDetailsComponent from "../../components/Movies/TVShowsDetails";
import { getMovieById } from "../../../lib/moviesList";

export async function generateMetadata({ params }) {
  const { movieId } = await params;
  const movie = await getMovieById(
    `https://api.themoviedb.org/3/movie/${movieId}`
  );

  return {
    title: "ZFlix TV shows | " + movie.title,
    description: "ZFlix TV shows | " + movie.title,
  };
}

const MovieDetails = async ({ params }) => {
  try {
    const { movieId } = await params;
    const movie = await getMovieById(
      `https://api.themoviedb.org/3/tv/${movieId}`
    );

    return (
      <div className="max-w-3xl mx-auto">
        <div className="">
          <TVShowsDetailsComponent movie={movie} />
        </div>
      </div>
    );
  } catch (error) {
    console.log("Error in MovieDetails: " + error.message);
    return <div className="text-center text-red-600">Error fetching data</div>;
  }
};

export default MovieDetails;

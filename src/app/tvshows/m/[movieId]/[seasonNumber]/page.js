import MovieInfo from "@/app/components/Seasons/MovieInfo";
import { getMovieById } from "@/lib/moviesList";

export async function generateMetadata({ params }) {
  const { movieId, seasonNumber } = await params;
  const movie = await getMovieById(
    `https://api.themoviedb.org/3/tv/${movieId}`
  );

  const newSeasonNumber = seasonNumber.split("-")[1];

  return movie
    ? {
        title:
          "ZFlix TV shows | " + movie?.name + ` | Season ${newSeasonNumber}`,
        description: "ZFlix TV shows | " + movie?.name,
      }
    : {
        title: "ZFlix | TV show not found!",
        description: "ZFlix | TV show not found!",
      };
}

const SeasonsDetails = async ({ params }) => {
  const { movieId, seasonNumber } = await params;
  const movie = await getMovieById(
    `https://api.themoviedb.org/3/tv/${movieId}`
  );

  const newSeasonNumber = seasonNumber.split("-")[1];

  if (movie) {
    return (
      <main className="max-w-4xl mx-auto">
        <div className="m-2">
          <MovieInfo seasonNumber={newSeasonNumber} movie={movie} />
        </div>
      </main>
    );
  } else {
    return <div className="text-center text-red-600">Error fetching data</div>;
  }
};

export default SeasonsDetails;

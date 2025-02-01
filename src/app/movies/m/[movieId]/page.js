import { getMovieById } from "../../../../lib/moviesList";
import NotFound from "@app/components/Movies/NotFound";
import MovieDetailsComponent from "../../../components/Movies/MovieDetailsComponent";
import { InfoIcon } from "lucide-react";
import Link from "next/link";
import { convertToKabaeCase } from "lib/utils";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const { movieId } = await params;
  const movie = await getMovieById(
    `https://api.themoviedb.org/3/movie/${movieId}`
  );

  return movie
    ? {
        title: "ZFlix Movies | " + (movie?.name || movie?.title),
        description: "ZFlix Movies | " + (movie?.name || movie?.title),
      }
    : {
        title: "ZFlix | Movie not found!",
        description: "ZFlix | Movie not found!",
      };
}

const MovieDetails = async ({ params, searchParams }) => {
  try {
    const { movieId } = await params;
    const { tab } = await searchParams;
    const movie = await getMovieById(
      `https://api.themoviedb.org/3/movie/${movieId}`
    );

    return (
      <div className="max-w-3xl mx-auto">
        <div className="">
          {movie ? (
            <MovieDetailsComponent tab={tab} movie={movie} />
          ) : (
            <NotFound>
              <InfoIcon className="mb-2" />
              <p>404 | No movie found!</p>
              <Link className="font-bold underline mt-2" href={"/tvshows"}>
                Explore movies
              </Link>
            </NotFound>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.log("Error in MovieDetails: " + error.message);
    return <div className="text-center text-red-600">Error fetching data</div>;
  }
};

export default MovieDetails;

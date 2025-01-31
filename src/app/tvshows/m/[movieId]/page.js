import TVShowsDetailsComponent from "../../../components/Movies/TVShowsDetails";
import { getMovieById } from "../../../../lib/moviesList";
import NotFound from "@/app/components/Movies/NotFound";
import { InfoIcon } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { movieId } = await params;
  const movie = await getMovieById(
    `https://api.themoviedb.org/3/tv/${movieId}`
  );

  return movie
    ? {
        title: "ZFlix TV shows | " + (movie?.name || movie?.title),
        description: "ZFlix TV shows | " + (movie?.name || movie?.title),
      }
    : {
        title: "ZFlix | TV show not found!",
        description: "ZFlix | TV show not found!",
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
          {movie ? (
            <TVShowsDetailsComponent movie={movie} />
          ) : (
            <NotFound>
              <InfoIcon className="mb-2" />
              <p>404 | No TV show found!</p>
              <Link className="font-bold underline mt-2" href={"/tvshows"}>
                Explore TV shows
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

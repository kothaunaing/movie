import { getMovieById } from "@/lib/moviesList";
import {
  convertToKabaeCase,
  formatMinuteToHour,
  prettyDate,
} from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/original";
const baseURL2 = "https://image.tmdb.org/t/p/w500";

const SingleSeasonComponent = async ({ movie, seasonNumber }) => {
  const seasonDetails = await getMovieById(
    `https://api.themoviedb.org/3/tv/${movie.id}/season/${seasonNumber}`
  );

  console.log(seasonDetails);

  if (seasonDetails) {
    return (
      <div>
        <div className="relative h-[150px] md:h-[250px] lg:h-[300px]">
          {movie.poster_path ? (
            <img
              src={baseURL + movie.backdrop_path}
              className="h-full w-full object-cover object-center rounded-lg "
            />
          ) : (
            <div
              className={clsx(
                "flex justify-center items-center h-[250px] w-[160px] rounded-md border"
              )}
            >
              No image
            </div>
          )}
          <div className="absolute top-2 left-2 z-10  rounded-md bg-black/70 p-2">
            <Link
              href={`/tvshows/m/${movie.id}-${convertToKabaeCase(movie.name)}`}
              className="font-bold  hover:underline cursor-pointer text-2xl"
            >
              {movie.name}
            </Link>
            <p className="font-bold text-lg">{seasonDetails.name}</p>

            <p className="text-sm italic">
              {seasonDetails?.episodes?.length}{" "}
              {seasonDetails?.episodes?.length <= 1 ? "Episode" : "Episodes"}
            </p>
          </div>
          <div className="absolute bottom-2 right-2 z-10">
            {seasonDetails?.vote_average ? (
              <span className="bg-black/70 font-bold p-2 rounded-full size-10">
                {seasonDetails.vote_average.toFixed("1")}/10
              </span>
            ) : null}
          </div>
        </div>
        <div>
          {seasonDetails.overview ? (
            <div className="mt-4">
              <h1 className="font-bold text-xl">Overview</h1>
              <p>{seasonDetails.overview}</p>
            </div>
          ) : null}
          <div className="mt-4">
            <h1 className="font-bold text-xl">Episodes</h1>
            <div className="space-y-3 mt-2">
              {seasonDetails.episodes.map((ep) => {
                return (
                  <div
                    key={ep.id}
                    className="p-1 md:flex gap-3 hover:shadow-md hover:shadow-white  rounded-md"
                  >
                    <div className="relative">
                      {ep.still_path ? (
                        <img
                          className="h-[150px] rounded-md w-full min-w-[300px]  object-cover"
                          src={baseURL2 + ep.still_path}
                        />
                      ) : (
                        <div
                          className={clsx(
                            "flex justify-center items-center h-[150px] w-[100px] rounded-md border "
                          )}
                        >
                          No image
                        </div>
                      )}
                      <div className="absolute top-2 right-2 z-10">
                        {ep?.vote_average ? (
                          <span className="bg-black/70 font-bold p-2 rounded-full size-10">
                            {ep.vote_average.toFixed("1")}/10
                          </span>
                        ) : null}
                      </div>
                      <div className="absolute top-2 left-2 z-10 ">
                        {ep?.episode_number ? (
                          <span className="bg-black/70 font-bold p-2 rounded-md  text-sm">
                            Episode {ep.episode_number}
                          </span>
                        ) : null}
                        {ep?.runtime ? (
                          <p className="bg-black/70 font-bold mt-2 p-2 rounded-md  text-sm max-w-fit">
                            {formatMinuteToHour(ep.runtime)}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex-1 mt-2 md:mt-0">
                      <p className="font-bold">{ep.name}</p>
                      <p className="italic">{prettyDate(ep.air_date)} </p>

                      <p className="mt-2">
                        {ep.overview ? (
                          ep.overview
                        ) : (
                          <span className="text-red-500 italic">
                            No preview
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="text-center text-red-600">No season found!</div>;
  }
};

export default SingleSeasonComponent;

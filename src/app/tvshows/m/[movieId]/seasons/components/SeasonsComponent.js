import { baseURL, convertToKabaeCase, prettyDate } from "@/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const SeasonsComponent = ({ movie }) => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-2">
        {movie.number_of_seasons} Seasons
      </h1>
      <div className="space-y-2">
        {movie.seasons.map((season) => {
          return (
            <Link
              href={`/tvshows/m/${movie.id}-${convertToKabaeCase(
                movie.name
              )}/seasons/${season.season_number}`}
              key={season.id}
              className="p-1 flex gap-2 hover:shadow-md hover:shadow-white cursor-pointer rounded-md"
            >
              <div className="relative">
                {season.poster_path ? (
                  <img
                    className="h-[150px] rounded-md w-full  object-cover"
                    src={baseURL + season.poster_path}
                  />
                ) : (
                  <div
                    className={clsx(
                      "flex justify-center items-center h-[150px] w-full rounded-md border"
                    )}
                  >
                    No image
                  </div>
                )}
                <div className="absolute bottom-2 right-2 z-10">
                  {season?.vote_average ? (
                    <span className="bg-black/70 font-bold p-2 rounded-full size-10">
                      {season.vote_average.toFixed("1")}/10
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="flex-1">
                <p className="font-bold">{season.name}</p>
                <p className="italic">{prettyDate(season.air_date)} </p>
                <p className="italic">{season.episode_count} episodes</p>
                <p className="mt-2">
                  {season.overview ? (
                    season.overview
                  ) : (
                    <span className="text-red-500 italic">No preview</span>
                  )}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SeasonsComponent;

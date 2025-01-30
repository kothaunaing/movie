import clsx from "clsx";
import { getImagesById } from "lib/moviesList";
import Link from "next/link";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/w500";

const MovieImages = async ({ url, tab }) => {
  const images = await getImagesById(url);

  return (
    <div id="images">
      <div className="m-2 flex gap-2">
        <h1
          className={clsx(
            "font-bold text-lg transition-[border] p-1 drop-shadow-xl "
          )}
        >
          Screenshots
        </h1>
      </div>
      <div
        style={{ scrollbarWidth: "none" }}
        className="flex overflow-auto mt-4 m-2 gap-2"
      >
        {images.backdrops.map((image) => {
          return (
            <img
              key={image.file_path}
              className="h-[180px] rounded-lg flex-shrink-0"
              src={baseURL + image.file_path}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieImages;

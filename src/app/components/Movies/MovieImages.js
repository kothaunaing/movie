import { getImagesById } from "lib/moviesList";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/w500";

const MovieImages = async ({ url }) => {
  const images = await getImagesById(url);
  const { backdrops, posters, logos } = images;

  console.log(images);

  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="flex overflow-auto mt-4 m-2 gap-1"
    >
      {backdrops.map((image) => {
        return (
          <img
            key={image.file_path}
            className="h-[150px] rounded-lg flex-shrink-0"
            src={baseURL + image.file_path}
          />
        );
      })}
    </div>
  );
};

export default MovieImages;

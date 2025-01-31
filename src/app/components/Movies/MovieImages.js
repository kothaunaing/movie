import clsx from "clsx";
import { getImagesById } from "lib/moviesList";
import React from "react";
import ScreenShotSlider from "./ScreenShotSlider";

const MovieImages = async ({ url, tab }) => {
  const images = await getImagesById(url);

  if (images?.backdrops?.length) {
    return (
      <div id="images">
        <div className="m-2 flex gap-2">
          <h1
            className={clsx(
              "font-bold text-xl transition-[border] p-1 drop-shadow-xl "
            )}
          >
            Screenshots
          </h1>
        </div>
        <ScreenShotSlider images={images} />
      </div>
    );
  }
};

export default MovieImages;

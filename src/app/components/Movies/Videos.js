import { getVideosByMovieId } from "lib/moviesList";
import React from "react";
import VideosSlider from "./VideosSlider";

const Videos = async ({ url }) => {
  const data = await getVideosByMovieId(url);

  if (data?.results?.length) {
    return (
      <div>
        <h1 className="font-bold text-xl mb-3 md:mt-4">Videos</h1>
        <VideosSlider data={data} />
      </div>
    );
  }
};

export default Videos;

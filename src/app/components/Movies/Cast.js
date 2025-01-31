import { getCreditsById } from "lib/moviesList";
import React from "react";
import CastSlider from "./CastSlider";

const Cast = async ({ url }) => {
  const data = await getCreditsById(url);

  if (data.cast.length) {
    return (
      <div className="m-2">
        <h1 className="font-bold text-xl mb-3 md:mt-4">Cast</h1>
        <CastSlider data={data} />
      </div>
    );
  }
};

export default Cast;

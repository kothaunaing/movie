import { getCreditsById } from "lib/moviesList";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/w500";

const Cast = async ({ url }) => {
  const data = await getCreditsById(url);

  console.log(data);
  return (
    <div className="m-2">
      <h1 className="font-bold text-xl mb-3 md:mt-4">Cast</h1>
      <div className="flex overflow-auto gap-2">
        {data.cast.map((c) => {
          return (
            <div
              key={c.id}
              className={"relative flex-shrink-0 overflow-hidden"}
            >
              <img
                className="h-[180px] w-full rounded-md"
                src={baseURL + c.profile_path}
                alt={c.name}
              />
              <div className="flex flex-col justify-end absolute inset-0 bg-black/40 p-2">
                <p className="font-bold">{c.name}</p>
                <p className="text-sm text-white italic">{c.character}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cast;

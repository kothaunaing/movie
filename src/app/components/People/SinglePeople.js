import { baseURL, formatDate, formatDateWithAge } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Biography from "./Biography";
import MoviesPreviews from "../Movies/MoviesPreviews";
import clsx from "clsx";

const GenderIcon = ({ gender }) => {
  return (
    <div className="flex items-center space-x-2 text-lg">
      {gender === 2 ? (
        <span className="text-blue-500">♂️</span>
      ) : gender === 1 ? (
        <span className="text-pink-500">♀️</span>
      ) : (
        <span>❓</span>
      )}
    </div>
  );
};

const SinglePeople = ({ person }) => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 items-start">
        <div className="flex justify-center flex-col items-center text-center">
          {/* <Image
            loading="lazy"
            className="rounded-md"
            src={baseURL + person.profile_path}
            height={150}
            width={150}
            alt={person.name}
          /> */}
          {person.profile_path ? (
            <img
              loading="lazy"
              className="rounded-md"
              src={baseURL + person.profile_path}
              height={150}
              width={150}
              alt={person.name}
            />
          ) : (
            <div
              className={clsx(
                "flex justify-center items-center w-[150px] h-[150px]"
              )}
            >
              No image
            </div>
          )}
          <div className="mt-2">
            <div className="font-bold text-xl flex gap-1 items-center justify-center">
              <GenderIcon gender={person.gender} /> <span>{person.name}</span>
            </div>
            <div className="text-sm">{formatDateWithAge(person.birthday)}</div>
          </div>
        </div>

        {person?.biography ? (
          <div>
            <h1 className="font-bold text-xl mb-2">Biography</h1>
            <Biography text={person.biography} />
          </div>
        ) : null}
      </div>

      <div className="mt-4">
        <MoviesPreviews
          title={"Movies"}
          url={`https://api.themoviedb.org/3/person/${person.id}/movie_credits`}
          seeMorePath={"/movies"}
          basePath={"/movies"}
        />
      </div>
      <div className="mt-4">
        <MoviesPreviews
          title={"TV shows"}
          url={`https://api.themoviedb.org/3/person/${person.id}/tv_credits`}
          seeMorePath={"/tvshows"}
          basePath={"/tvshows"}
        />
      </div>
    </div>
  );
};

export default SinglePeople;

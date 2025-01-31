import { baseURL, convertToKabaeCase } from "@/lib/utils";
import { VideoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const People = ({ people }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-2">
      {people.map((person, index) => {
        return (
          <Link
            href={`/people/${person.id}-${convertToKabaeCase(person.name)}`}
            key={person.profile_path + index}
            className="flex-shrink-0 relative rounded-lg overflow-hidden group"
          >
            {/* <Image
              loading="lazy"
              className=" w-full h-full object-contain object-top group-hover:scale-125 transition-transform duration-150"
              src={baseURL + person.profile_path}
              alt={person.name}
              height={100}
              width={100}
            /> */}
            <img
              loading="lazy"
              className=" w-full h-full object-contain object-top group-hover:scale-125 transition-transform duration-150"
              src={baseURL + person.profile_path}
              alt={person.name}
              height={100}
              width={100}
            />
            <div className="absolute translate-y-5 group-hover:translate-y-0 transition-transform duration-300 hidden group-hover:block p-2 inset-0 bg-black/30 ">
              <p className="font-bold text-lg">{person.name}</p>
              <KnownFor knownFor={person.known_for} index={index} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const KnownFor = ({ knownFor, index }) => {
  return (
    <div className="space-y-1 mt-2 ">
      {knownFor.map((k, i) => {
        return (
          <div
            key={k.id + i + index + k?.name || k?.title}
            className="text-sm rounded-lg font-bold  text-white flex items-start gap-2 "
          >
            <VideoIcon className="size-5" />
            {k?.title || k?.name}
          </div>
        );
      })}
    </div>
  );
};

export default People;

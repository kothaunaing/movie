import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const movies = [
  {
    link: "https://m.media-amazon.com/images/S/pv-target-images/dba04e61f844b918594d6884cb4575bb9bb11426908d391c446aa3d21a6983fa._UR1920,1080_SX500_FMpng_.png",
  },
  {
    link: "https://m.media-amazon.com/images/S/pv-target-images/9182b8777f07bc6a4e308f2093302fe7597b92102bd0947307ebebe5d82dc7ef._UR1920,1080_SX500_FMwebp_.png",
  },
  {
    link: "https://m.media-amazon.com/images/S/pv-target-images/82fc93ec0c06dfc6b57fc10fce82c6f335cefb95742bf965c49133847220e3d5._UR1920,1080_SX500_FMwebp_.png",
  },
  {
    link: "https://m.media-amazon.com/images/S/pv-target-images/72b69c5d0f16e4548fa2b9a06745c70a6f29f8e1e6f9a25cd4ec4286dc11b7f7._UR1920,1080_SX500_FMpng_.png",
  },
];

const Movies = () => {
  return (
    <section>
      <h1 className="flex gap-3">
        <span className="font-bold">Top TV</span>
        <Link className="flex gap-1 items-center" href={"/tv"}>
          See more
          <ChevronRightIcon className="size-5" />
        </Link>
      </h1>
      <div
        style={{ scrollbarWidth: "none" }}
        className="mt-4 flex overflow-x-auto md:overflow-auto space-x-4 scrollbar-hide  gap-2 "
      >
        {movies.map((movie, index) => {
          return (
            <div key={movie.link + index} className="flex-shrink-0 h-full">
              <Image
                className="rounded-md"
                alt={movie.link}
                src={movie.link}
                height={100}
                width={250}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;

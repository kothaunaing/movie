// "use client";
// import useSlider from "@/lib/useSlider";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/w500";

const VideosSlider = ({ data }) => {
  // const {
  //   sliderRef,
  //   scrollLeft,
  //   scrollRight,
  //   showLeftButton,
  //   showRightButton,
  // } = useSlider();

  return (
    <div className="relative">
      {/* {showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 bottom-[50%] z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all translate-y-[50%]"
        >
          <ChevronLeftIcon />
        </button>
      )} */}
      <div
        // ref={sliderRef}
        className="flex overflow-auto gap-2"
      >
        {data.results.map((video) => {
          return (
            <iframe
              key={video.id}
              className="w-full h-full rounded-md"
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              height={150}
              width={300}
            ></iframe>
          );
        })}
      </div>
      {/* {showRightButton && (
        <button
          onClick={scrollRight}
          className="absolute right-0 bottom-[50%] translate-y-[50%] z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRightIcon />
        </button>
      )} */}
    </div>
  );
};

export default VideosSlider;

"use client";
import useSlider from "@/lib/useSlider";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/w500";

const VideosSlider = ({ data }) => {
  const {
    sliderRef,
    scrollLeft,
    scrollRight,
    showLeftButton,
    showRightButton,
  } = useSlider();

  return (
    <div className="relative">
      {showLeftButton && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 bottom-[50%] z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all translate-y-[50%]"
        >
          <ChevronLeftIcon />
        </button>
      )}
      <div
        ref={sliderRef}
        style={{ scrollbarWidth: "none" }}
        className="flex overflow-auto gap-2 h-[220px]"
      >
        {data?.results
          ?.filter((r) => r.type === "Trailer")
          ?.slice(0, 3)
          ?.map((video) => {
            return (
              <iframe
                key={video.id}
                className="h-full rounded-md flex-shrink-0 "
                src={`https://www.youtube.com/embed/${video.key}`}
                title={video.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                height={150}
                width={300}
              ></iframe>
            );
          })}
      </div>
      {showRightButton && (
        <button
          onClick={scrollRight}
          className="absolute right-0 bottom-[50%] translate-y-[50%] z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRightIcon />
        </button>
      )}
    </div>
  );
};

export default VideosSlider;

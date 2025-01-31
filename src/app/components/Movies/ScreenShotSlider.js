"use client";

import useSlider from "@/lib/useSlider";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/w500";

const ScreenShotSlider = ({ images }) => {
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
        className="flex overflow-auto mt-4 m-2 gap-2"
      >
        {images.backdrops.slice(0, 40).map((image) => {
          return (
            // <Image
            //   loading="lazy"
            //   key={image.file_path}
            //   className="h-[180px] rounded-lg flex-shrink-0 "
            //   src={baseURL + image.file_path}
            //   alt={image.file_path}
            //   height={180}
            //   width={300}
            // />
            <img
              loading="lazy"
              key={image.file_path}
              className="h-[180px] rounded-lg flex-shrink-0 "
              src={baseURL + image.file_path}
              alt={image.file_path}
              height={180}
              width={300}
            />
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

export default ScreenShotSlider;

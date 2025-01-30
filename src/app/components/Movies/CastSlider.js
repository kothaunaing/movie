"use client";
import useSlider from "@/lib/useSlider";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const baseURL = "https://image.tmdb.org/t/p/w500";

const CastSlider = ({ data }) => {
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
        style={{ scrollbarWidth: "none" }}
        ref={sliderRef}
        className="flex overflow-auto gap-2"
      >
        {data.cast.map((c) => {
          return (
            <Link
              href={`/people/${c.id}`}
              key={c.id}
              className={
                "group relative flex-shrink-0 overflow-hidden rounded-md"
              }
            >
              <Image
                className="h-[180px] w-full rounded-md group-hover:scale-125 duration-150 transition-transform"
                src={baseURL + c.profile_path}
                alt={c.name}
                height={180}
                width={100}
              />

              <div className="flex flex-col justify-end absolute inset-0 bg-black/40 p-2">
                <p className="font-bold">{c.name}</p>
                <p className="text-sm text-white italic">{c.character}</p>
              </div>
            </Link>
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

export default CastSlider;

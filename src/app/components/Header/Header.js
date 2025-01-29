"use client";

import { ChevronDownIcon, SearchIcon, UserRoundIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppIcon from "./AppIcon";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 p-2 container mx-auto flex justify-between items-center md:backdrop-blur-md bg-black md:bg-black/50 rounded-b-md ">
      <Dropdown icon text={"Menu"} className="md:hidden">
        <ul className="grid gap-4 items-center ">
          <li className="flex items-center gap-1 p-2 hover:bg-white/80 rounded-lg hover:text-black duration-150 transition-colors cursor-pointer">
            Home
          </li>
          <li className="flex items-center gap-1 p-2 hover:bg-white/80 rounded-lg hover:text-black duration-150 transition-colors cursor-pointer">
            Movies
          </li>
          <li className="flex items-center gap-1 p-2 hover:bg-white/80 rounded-lg hover:text-black duration-150 transition-colors cursor-pointer">
            TV shows
          </li>
        </ul>
        <button className="flex mt-2 bg-blue-500 items-center gap-1 p-2 hover:shadow-md hover:shadow-blue-400 rounded-md text-white  transition-colors">
          Join Prime
        </button>
      </Dropdown>
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            height={20}
            width={100}
            alt="prime logo"
            src={
              "https://m.media-amazon.com/images/G/01/digital/video/web/logo-min-remaster.png"
            }
          />
        </Link>
        <ul className="md:flex gap-4 items-center hidden ml-9 ">
          <li className="flex items-center gap-1 p-2 hover:bg-white/80 rounded-lg hover:text-black duration-150 transition-colors cursor-pointer">
            Home
          </li>
          <li className="flex items-center gap-1 p-2 hover:bg-white/80 rounded-lg hover:text-black duration-150 transition-colors cursor-pointer">
            Movies
          </li>
          <li className="flex items-center gap-1 p-2 hover:bg-white/80 rounded-lg hover:text-black duration-150 transition-colors cursor-pointer">
            TV shows
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1 p-3 hover:bg-white/80 rounded-full hover:text-black font-bold transition-colors">
          <SearchIcon className="size-5" />
        </button>

        <Dropdown text={"En"} icon>
          <ul className="grid gap-4 items-center ">
            <li className="flex items-center gap-1 p-2 hover:bg-white/80 rounded-lg hover:text-black duration-150 transition-colors cursor-pointer">
              English
            </li>
            <li className="flex items-center gap-1 p-2 hover:bg-white/80 rounded-lg hover:text-black duration-150 transition-colors cursor-pointer">
              Myanmar
            </li>
          </ul>
        </Dropdown>
        <button className="flex items-center gap-1 p-2 hover:bg-white/80 rounded-full hover:text-black font-bold transition-colors">
          <AppIcon className="size-7" />
        </button>
        <button className="flex items-center gap-1 p-1 hover:bg-white/80 rounded-full hover:text-black font-bold transition-colors">
          <UserRoundIcon className="size-7" />
        </button>
        <button className="md:flex hidden bg-blue-500 items-center gap-1 p-2 hover:shadow-md hover:shadow-blue-400 rounded-md text-white  transition-colors">
          Join Prime
        </button>
      </div>
    </header>
  );
};

export default Header;

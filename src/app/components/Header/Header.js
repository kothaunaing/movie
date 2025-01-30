"use client";

import { SearchIcon, UserRoundIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppIcon from "./AppIcon";
import Dropdown from "./Dropdown";
import clsx from "clsx";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ZFlixLogo from "./ZFlixLogo";

const Header = () => {
  return (
    <header className="sticky top-0 inset-x-0 p-2 container mx-auto flex justify-between items-center md:backdrop-blur-md bg-black md:bg-black/50 rounded-b-md z-20">
      <MobileMenu />

      <div className="flex items-center">
        <Link href={"/"}>
          <ZFlixLogo />
        </Link>
        <ul className="md:flex gap-4 items-center hidden ml-9 ">
          <NavLinks />
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1 p-3 hover:bg-white/80 rounded-full hover:text-black font-bold transition-colors">
          <SearchIcon className="size-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;

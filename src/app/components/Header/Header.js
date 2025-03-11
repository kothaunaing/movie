"use client";

import { SearchIcon } from "lucide-react";

import Link from "next/link";
import React, { useState } from "react";

import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import ZFlixLogo from "./ZFlixLogo";
import SearchUI from "./SearchUI";

const Header = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
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
          <button
            onClick={() => setOpenSearch(true)}
            className="relative flex items-center gap-1 p-3 hover:bg-white/80 rounded-full hover:text-black font-bold transition-colors"
          >
            <div className="size-3 bg-blue-500 rounded-full right-0 absolute bottom-2/3 animate-ping" />
            <div className="size-3 bg-blue-500 rounded-full right-0 absolute bottom-2/3" />
            <SearchIcon className="size-5" />
          </button>
        </div>
      </header>
      {openSearch && <SearchUI setOpenSearch={setOpenSearch} />}
    </>
  );
};

export default Header;

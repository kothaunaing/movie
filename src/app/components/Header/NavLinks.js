import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const pathname = usePathname();
  const isHomeActive = pathname === "/";
  const isMoviesActive = pathname === "/movies";
  const isTVActive = pathname === "/tvshows";

  return (
    <>
      <li>
        <Link
          className={clsx(
            "flex items-center gap-1 p-2  rounded-lg  duration-150 transition-colors cursor-pointer",
            isHomeActive
              ? "bg-white/80 text-black"
              : "hover:bg-white/80 hover:text-black"
          )}
          href={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={clsx(
            "flex items-center gap-1 p-2  rounded-lg  duration-150 transition-colors cursor-pointer",
            isMoviesActive
              ? "bg-white/80 text-black"
              : "hover:bg-white/80 hover:text-black"
          )}
          href={"/movies"}
        >
          Movies
        </Link>
      </li>
      <li>
        <Link
          className={clsx(
            "flex items-center gap-1 p-2  rounded-lg  duration-150 transition-colors cursor-pointer",
            isTVActive
              ? "bg-white/80 text-black"
              : "hover:bg-white/80 hover:text-black"
          )}
          href={"/tvshows"}
        >
          TV shows
        </Link>
      </li>
    </>
  );
};

export default NavLinks;

import { usePathname } from "next/navigation";

const useActive = () => {
  const pathname = usePathname();
  const isHomeActive = pathname === "/";

  const isMoviesActive = pathname === "/movies";
  const isNowPlayingActive = pathname === "/movies/now-playing";
  const isUpComingActive = pathname === "/movies/upcoming";
  const isMoviesTopRatedActive = pathname === "/movies/top-rated";

  const isTVActive = pathname === "/tvshows";
  const isOnTvActive = pathname === "/tvshows/ontv";
  const isTvTopRatedActive = pathname === "/tvshows/top-rated";

  const isPeopleActive = pathname === "/people";

  const isMovieGenresActive = pathname === "/movies/genres";
  const isTVGenresActive = pathname === "/tvshows/genres";

  return {
    isHomeActive,
    isMoviesActive,
    isNowPlayingActive,
    isUpComingActive,
    isMoviesTopRatedActive,
    isTVActive,
    isOnTvActive,
    isTvTopRatedActive,
    isPeopleActive,
    isMovieGenresActive,
    isTVGenresActive,
  };
};

export default useActive;

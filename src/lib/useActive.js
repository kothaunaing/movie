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

  return {
    isHomeActive,
    isMoviesActive,
    isNowPlayingActive,
    isUpComingActive,
    isMoviesTopRatedActive,
    isTVActive,
    isOnTvActive,
    isTvTopRatedActive,
  };
};

export default useActive;

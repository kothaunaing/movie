import React from "react";
import Dropdown from "./Dropdown";
import ListItem from "./ListItem";
import useActive from "../../../lib/useActive";

const NavLinks = () => {
  const {
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
    isTVAiringTodayActive,
  } = useActive();

  return (
    <>
      <Dropdown text={"Movies"} icon>
        <ListItem path={"/movies"} text={"Popular"} active={isMoviesActive} />
        <ListItem
          path={"/movies/now-playing"}
          text={"Now Playing"}
          active={isNowPlayingActive}
        />
        <ListItem
          path={"/movies/upcoming"}
          text={"Upcoming"}
          active={isUpComingActive}
        />
        <ListItem
          path={"/movies/top-rated"}
          text={"Top Rated"}
          active={isMoviesTopRatedActive}
        />
      </Dropdown>
      <Dropdown text={"TV shows"} icon>
        <ListItem
          path={"/tvshows/airing-today"}
          text={"Airing Today"}
          active={isTVAiringTodayActive}
        />
        <ListItem path={"/tvshows"} text={"Popular"} active={isTVActive} />
        <ListItem path={"/tvshows/ontv"} text={"On TV"} active={isOnTvActive} />
        <ListItem
          path={"/tvshows/top-rated"}
          text={"Top Rated"}
          active={isTvTopRatedActive}
        />
      </Dropdown>
      <Dropdown text={"Genres"} icon>
        <ListItem
          path={"/movies/genres"}
          text={"Movies"}
          active={isMovieGenresActive}
        />
        <ListItem
          path={"/tvshows/genres"}
          text={"TV shows"}
          active={isTVGenresActive}
        />
      </Dropdown>
      <ListItem path={"/people"} text={"People"} active={isPeopleActive} />
    </>
  );
};

export default NavLinks;

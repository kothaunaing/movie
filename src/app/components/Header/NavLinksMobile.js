import React from "react";
import ListItem from "./ListItem";
import Accordion from "./Accordion";
import useActive from "../../../lib/useActive";

const NavLinksMobile = () => {
  const {
    isHomeActive,
    isMoviesActive,
    isNowPlayingActive,
    isUpComingActive,
    isMoviesTopRatedActive,
    isTVActive,
    isOnTvActive,
    isTvTopRatedActive,
  } = useActive();

  return (
    <>
      <ListItem path={"/"} text={"Home"} active={isHomeActive} />

      <Accordion text={"Movies"}>
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
      </Accordion>
      <Accordion text={"TV shows"}>
        <ListItem path={"/tvshows"} text={"Popular"} active={isTVActive} />
        <ListItem path={"/tvshows/ontv"} text={"On TV"} active={isOnTvActive} />
        <ListItem
          path={"/tvshows/top-rated"}
          text={"Top Rated"}
          active={isTvTopRatedActive}
        />
      </Accordion>
    </>
  );
};

export default NavLinksMobile;

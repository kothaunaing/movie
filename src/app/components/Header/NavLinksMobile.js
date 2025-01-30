import React from "react";
import ListItem from "./ListItem";
import Accordion from "./Accordion";
import useActive from "../../../lib/useActive";

const NavLinksMobile = ({ handleClick }) => {
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
  } = useActive();

  return (
    <>
      <ListItem
        onClick={handleClick}
        path={"/"}
        text={"Home"}
        active={isHomeActive}
      />

      <Accordion text={"Movies"}>
        <ListItem
          onClick={handleClick}
          path={"/movies"}
          text={"Popular"}
          active={isMoviesActive}
        />
        <ListItem
          onClick={handleClick}
          path={"/movies/now-playing"}
          text={"Now Playing"}
          active={isNowPlayingActive}
        />
        <ListItem
          onClick={handleClick}
          path={"/movies/upcoming"}
          text={"Upcoming"}
          active={isUpComingActive}
        />
        <ListItem
          onClick={handleClick}
          path={"/movies/top-rated"}
          text={"Top Rated"}
          active={isMoviesTopRatedActive}
        />
      </Accordion>
      <Accordion text={"TV shows"}>
        <ListItem
          onClick={handleClick}
          path={"/tvshows"}
          text={"Popular"}
          active={isTVActive}
        />
        <ListItem
          onClick={handleClick}
          path={"/tvshows/ontv"}
          text={"On TV"}
          active={isOnTvActive}
        />
        <ListItem
          onClick={handleClick}
          path={"/tvshows/top-rated"}
          text={"Top Rated"}
          active={isTvTopRatedActive}
        />
      </Accordion>
      <ListItem
        onClick={handleClick}
        path={"/people"}
        text={"People"}
        active={isPeopleActive}
      />
    </>
  );
};

export default NavLinksMobile;

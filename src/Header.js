import { IconButton } from "@material-ui/core";
import { Forum, Person } from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <IconButton>
        <Person />
      </IconButton>
      <img
        className="Header-logo"
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
        alt="tinder icon"
      />
      <IconButton>
        <Forum />
      </IconButton>
    </header>
  );
}

export default Header;

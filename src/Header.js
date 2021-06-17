import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { ArrowBackIos, Forum, Person } from "@material-ui/icons";
import "./Header.css";

function Header({ backButton }) {
  const history = useHistory();
  const handleClick = function () {
    history.replace(backButton);
  };

  return (
    <header className="Header">
      {backButton ? (
        <IconButton onClick={handleClick}>
          <ArrowBackIos fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <Person />
        </IconButton>
      )}
      <img
        className="Header-logo"
        src="https://loghi-famosi.com/wp-content/uploads/2020/09/Tinder-Symbolo.png"
        alt="tinder icon"
      />
      <Link to="/chats">
        <IconButton>
          <Forum />
        </IconButton>
      </Link>
    </header>
  );
}

export default Header;

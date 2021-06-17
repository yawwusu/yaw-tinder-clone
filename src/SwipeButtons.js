import { IconButton } from "@material-ui/core";
import { Close, Favorite, FlashOn, Replay, StarRate } from "@material-ui/icons";
import React from "react";
import "./SwipeButtons.css";
function SwipeButtons() {
  return (
    <div className="SwipeButtons">
      <IconButton className="SwipeButtons-replay">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="SwipeButtons-close">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="SwipeButtons-star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="SwipeButtons-favorite">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="SwipeButtons-flash">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;

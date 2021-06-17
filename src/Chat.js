import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Chat({ name, message, timestamp, profilePic }) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="Chat">
        <Avatar className="Chat-image" alt={name} src={profilePic} />
        <div className="Chat-details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <span className="Chat-timestamp">{timestamp}</span>
      </div>
    </Link>
  );
}

export default Chat;

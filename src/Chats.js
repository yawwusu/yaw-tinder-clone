import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="Chats">
      <Chat
        name="Mark"
        message="Hello"
        timestamp="40 seconds ago"
        profilePic="https://loghi-famosi.com/wp-content/uploads/2020/09/Tinder-Symbolo.png"
      />
    </div>
  );
}

export default Chats;

import React from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([
    {
      name: "Mark",
      image:
        "https://loghi-famosi.com/wp-content/uploads/2020/09/Tinder-Symbolo.png",
      message: "Hello",
    },
    {
      message: "hi",
    },
  ]);

  const handleSend = function (event) {
    event.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="ChatScreen">
      <p className="ChatScreen-timestamp">
        YOU MATCHED WITH ELLEN ON 10/10/2020
      </p>
      {messages.map((message) =>
        !!message.name ? (
          <div className="ChatScreen-message">
            <Avatar
              className="ChatScreen-image"
              alt={message.name}
              src={message.image}
            />
            <p className="ChatScreen-text">{message.message}</p>
          </div>
        ) : (
          <div className="ChatScreen-message">
            <p className="ChatScreen-textUser">{message.message}</p>
          </div>
        )
      )}

      <div className="ChatScreen-input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="ChatScreen-inputField"
            placeholder="Type a message..."
            type="text"
          />
          <button className="ChatScreen-button" onClick={handleSend}>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;

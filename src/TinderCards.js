import React from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = React.useState([
    {
      name: "steve jobs",
      url: "https://www.ilmattino.it/photos/HIGH/12/80/1231280_50907_c4_steve_jobsc.jpg",
    },
    {
      name: "yaw",
      url: "https://i1.rgstatic.net/ii/profile.image/441069365141505-1482170539676_Q512/Yaw-Owusu-Agyemang.jpg",
    },
  ]);

  return (
    <div>
      <h1>TinderCards</h1>

      <div className="Card-container">
        {people.map((person) => (
          <TinderCard
            key={person.name}
            className="swipe"
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="Card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

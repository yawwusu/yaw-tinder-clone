import React from "react";
import TinderCard from "react-tinder-card";
import { db } from "./firebase";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = db
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(
          snapshot.docs.map((doc) => ({ id: doc.id, info: doc.data() }))
        )
      );
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="Card-container">
        {people.map((person) => (
          <TinderCard
            key={person.id}
            className="swipe"
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.info.url})` }}
              className="Card"
            >
              <h3>{person.info.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

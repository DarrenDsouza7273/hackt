import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const RoomsPage = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards([...cards, { id: cards.length }]);
  };

  return (
    <div className="rooms-page">
      <button className="add-card-button" onClick={addCard}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id} className="room-card">
            <p>Room Card {card.id + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;

import React from "react";
import "./MemoryCard.css";
function MemoryCard({ card, handleSelected, disabled, rotated }) {
  const handleClick = () => {
    if (!disabled) {
      handleSelected(card);
    }
  };

  return (
    <div className="card">
      <div className={rotated ? "rotated rotateDiv" : "rotateDiv"}>
        <img className="cardFront" src={card.path} alt="" />
        <img
          className="cardBack"
          src="/img/cover.jpeg"
          onClick={handleClick}
          alt=""
        />
      </div>
    </div>
  );
}

export default MemoryCard;

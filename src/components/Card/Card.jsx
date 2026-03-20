import React from "react";
import "./Card.css";

function Card({ title, image }) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>

      <div className="card-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

export default Card;
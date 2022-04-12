import React from "react";
import "../styles/Card.css";

function Card({ oldPrice, url }) {
  return (
    <div className="slider__card">
      <img src={url} />
      <h2>GEORGETTE CAMISOLE</h2>
      {oldPrice === "" && <h2>₹880</h2>}
      {oldPrice !== "" && (
        <div className="card__prices">
          <h5>₹880</h5>
          <h5>₹900</h5>
        </div>
      )}
    </div>
  );
}

export default Card;

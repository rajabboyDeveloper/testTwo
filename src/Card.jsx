import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <div className="card-mini">
        <div className="card-mini-photo">
          <img src={props.url} className="mini-photo-img" />
        </div>
        <div className="card-mini-box">
          <h1>{props.title}</h1>
          <p>{props.short}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

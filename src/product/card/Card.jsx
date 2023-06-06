import React from "react";
import "./CArd.css";
function Card(props) {
  return (
    <div className="card">
      <img src={props.url} />
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;

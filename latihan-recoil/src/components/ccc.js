import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.content.imageUrl} alt="cat" className="card-img-top" />
      <div className="card-body">
        <h6>The {props.content.title}</h6>
        <small className="text-muted">{props.content.datePost}</small>
      </div>
    </div>
  );
}

export default Card;

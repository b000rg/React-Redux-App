import React from "react";
import card from "react-bootstrap/Card";

const Card = (props) => {
  return (
    <card>
      <card.Body>
        <img src={props.card.imageUrl} />
      </card.Body>
    </card>
  );
};

export default Card;

import React from "react";

const Travels = props => (
  <figure>
    <img src={props.photo} alt={props.country} />
      <figcaption>
        <blockquote>{props.destination}</blockquote>
        <p>{props.country}</p>
        <cite>{props.distance}</cite>
      </figcaption>
    </figure>
);

export default Travels;

import React from "react";

const Travels = props => (
  <figure>
    <img src={props.photo} alt={props.country} key={props.destination}/>
      <figcaption>
        <blockquote>{props.country}</blockquote>
        <p>{props.destination}</p>
        <cite>{props.distance}</cite>
      </figcaption>
    </figure>
);

export default Travels;

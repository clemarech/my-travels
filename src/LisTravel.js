import React from "react";
import Travels from "./Travels";
import image1 from './imgs/riviere.jpg';
import image2 from './imgs/grotte.jpg';
import image3 from './imgs/volcan.jpg';
import image4 from './imgs/mexique.jpg';
import image5 from './imgs/falaises.jpg';
const travelsArray = [
  {
    photo: String(image1),
    country: "New Zealand",
    destination: "Oceania",
    distance: "Shotover River"
  },
  {
    photo: String(image2),
    country: "New Zealand",
    destination: "Oceania",
    distance: "Waitomo Cave"
  },
  {
    photo:String(image3),
    country:"Russia",
    destination:"Europe/Asie",
    distance:"Kamchata Vulcan"
  },
  {
    photo:String(image4),
    country:"Mexique",
    destination:"North America",
    distance:""
  },
  {
    photo:String(image5),
    country:"Ireland",
    destination:"Europe",
    distance:"Giants Causeway"
  }
];

const LisTravel = () => (
  travelsArray.map(param => (
    <Travels photo={param.photo} key={param.destination} country={param.country} destination={param.destination} distance={param.distance} />
)
)
);

export default LisTravel;

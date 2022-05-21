import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import "./product.css";

export default function artCard(props) {
  return (
    <div className="card mt-2 mb-2  w-100">
      <img
        src={props.ArtData.image[1]}
        alt="bag"
        id="art-img"
        className="card-img-top"
      />

      <div className="card-body">
        <h5 class="card-title">{props.ArtData.name}</h5>
        <h5>
          <FaRupeeSign /> {props.ArtData.price}
        </h5>
        <p class="card-text">{props.ArtData.description}</p>
      </div>
    </div>
  );
}

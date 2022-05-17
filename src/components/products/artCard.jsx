import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import "./product.css";

export default function artCard() {
  return (
    <div className="card mt-2 mb-2  w-100">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.KyKQ96rR0BDELSWjZZ-7PwHaFv%26pid%3DApi&f=1"
        alt="bag"
        id="art-img"
        className="card-img-top"
      />

      <div className="card-body">
        <h5 class="card-title">Card title</h5>
        <h5>
          <FaRupeeSign /> 455
        </h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

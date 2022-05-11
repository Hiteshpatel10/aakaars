import React from "react";
import images from "../assets/images";
import "./ItemCard.css";

export default function ItemCard() {
  return (
    <div className="container">
      <h3 className="itemcard-title">Our Products</h3>
      <div className="row">
        {images.map((item) => (
          <div className="col">
            <div className="card outer-card shadow-sm mb-5 bg-white rounded">
              <img
                className="card-img-top"
                src={item.src}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title text-center">{item.alt}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

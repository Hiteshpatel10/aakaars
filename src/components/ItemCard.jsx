import React from "react";
import phimg from "../assets/placeholderimg.jpg";
import "./ItemCard.css";

export default function ItemCard() {
  return (
    <div className="outer-card">
      <div className="card outer-card shadow-sm mb-5 bg-white rounded">
        <img className="card-img-top" src={phimg} alt="Card image cap" />

        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ArtCard from "./artCard";
import images from "../../assets/images";

export default function productList() {
  return (
    <div className="m-3">
      <div>
        <h3>Filter</h3>
      </div>
      <div className="row">
        {images.map((image) => (
          <div className="col-md-3">
            <ArtCard />
          </div>
        ))}
      </div>
    </div>
  );
}

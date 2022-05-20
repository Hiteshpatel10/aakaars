import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function () {
  const { state } = useLocation();
  const [mainImage, setMainImage] = useState(state.productData.image[0]);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-5 col-md-12 col-12">
          <img src={mainImage} alt="img" className="img-fluid w-100 pb-1" />

          <div className="small-img-group">
            {state.productData.image.map((img) => (
              <div className="small-img-col" onClick={() => setMainImage(img)}>
                <img src={img} alt="img" className="small-img w-100" />
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-12">
          <h6>{state.productData.category}</h6>
          <h3 className="py-4">{state.productData.name}</h3>
          <h2>$ {state.productData.price}</h2>
          <h4 className="mt-5">Product Description</h4>
          <span>{state.productData.description}</span>
        </div>
      </div>
    </div>
  );
}

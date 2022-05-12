import React from "react";
import { useState, useEffect } from "react";
import images from "../assets/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ItemCard.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function ItemCard() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  var a = 6;
  if (windowDimensions.width < 500) a = 3;

  const settings = {
    infinite: true,
    slidesToShow: a,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
    cssEase: "linear",
  };

  return (
    <div className="p-1">
      <h3 className="itemcard-title ps-3">Our Products</h3>
      <Slider {...settings}>
        {images.map((item) => (
          <div className="p-2">
            <div className="card ">
              <img
                className="card-img-top"
                src={item.src}
                alt="Card image cap"
              />
              <div className="p-2">
                <h6 className="card-title text-center">{item.alt}</h6>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

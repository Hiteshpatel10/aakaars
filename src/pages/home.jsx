import React from "react";
import ItemCard from "../components/ItemCard";
import ImageCarousel from "../components/ImageCarousel";
import images from "../assets/images";

export default function Home() {
  return (
    <div>
      <ImageCarousel images={images} />
      <ItemCard />
    </div>
  );
}

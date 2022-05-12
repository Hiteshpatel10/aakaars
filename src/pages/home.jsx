import React from "react";
import ItemCard from "../components/ItemCard";
import ImageCarousel from "../components/Carausel/ImageCarousel";
import TempleCard from "../components/TempleCard";
import images from "../assets/images";

export default function Home() {
  return (
    <div>
      <ImageCarousel images={images} />
      <ItemCard />
      <TempleCard />
    </div>
  );
}

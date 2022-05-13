import React, { useEffect, useRef, useState } from "react";
import ItemCard from "../components/ItemCard";
import ImageCarousel from "../components/Carausel/ImageCarousel";
import TempleCard from "../components/TempleCard";
import images from "../assets/images";
import Amplify, { API, graphqlOperation, Storage } from "aws-amplify";
import { S3Image } from "aws-amplify-react";
import awsconfig from "../aws-exports";
import { listProducts } from "../graphql/queries";

API.configure(awsconfig);
Storage.configure(awsconfig);

export default function Home() {
  const [product, productList] = useState([]);

  useEffect(() => {
    fetchProductList();
  }, []);
  const fetchProductList = async () => {
    try {
      const products = await API.graphql(graphqlOperation(listProducts));
      const productList = products.data.listProducts.items;
      console.log("songs list", productList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ImageCarousel images={images} />
      <ItemCard />
      <TempleCard />
    </div>
  );
}

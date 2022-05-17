import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import ImageCarousel from "../components/Carausel/ImageCarousel";
import TempleCard from "../components/TempleCard";
import images from "../assets/images";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../aws-exports";
import { listProducts } from "../graphql/queries";
import About from "../pages/about";

Amplify.configure(awsconfig);

export default function Home() {
  const [product, productList] = useState([]);

  useEffect(() => {
    // fetchProductList();
  }, []);
  const fetchProductList = async () => {
    try {
      const products = await API.graphql(graphqlOperation(listProducts));
      console.log("prodcut", products.data.listProducts.items);
      productList(products.data.listProducts.items);
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

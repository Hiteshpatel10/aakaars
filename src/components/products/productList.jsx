import React, { useEffect, useState } from "react";
import ArtCard from "./artCard";
import { API, graphqlOperation } from "aws-amplify";
import { listProducts } from "../../graphql/queries";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductList(category) {
  let navigate = useNavigate();
  const { state } = useLocation();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchCategoryList();
  }, []);

  const fetchCategoryList = async () => {
    try {
      const categoryData = await API.graphql(
        graphqlOperation(listProducts, {
          filter: { category: { contains: state.category } },
        })
      );
      const categoryList = categoryData.data.listProducts.items;
      setCategoryList(categoryList);
    } catch (error) {
      console.log("error on fetching category list", error);
    }
  };
  return (
    <div className="m-3">
      <div>
        <h3>Filter</h3>
      </div>

      <div className="row">
        {categoryList.map((item) => (
          <div
            className="col-md-3"
            key={item.id}
            onClick={() =>
              navigate("productDetail", { state: { productData: item } })
            }
          >
            <ArtCard ArtData={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

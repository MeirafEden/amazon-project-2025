import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./Results.module.css";
import LayOut from "../../../Components/LayOut/LayOut";
import Loader from "../../../Components/Loader/Loader";
import ProductCard from "../../../Components/Product/ProductCard";

function Results() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <div className={classes.results}>
        <h2 className={classes.title}>{categoryName.replace(/_/g, " ")}</h2>

        {isLoading ? (
          <Loader message="Loading products..." />
        ) : products.length > 0 ? (
          <div className={classes.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className={classes.no_products}>
            No products found in this category.
          </p>
        )}
      </div>
    </LayOut>
  );
}

export default Results;

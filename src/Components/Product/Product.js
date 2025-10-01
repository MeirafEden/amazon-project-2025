import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
// import classes from "./ProductCard.module.css";
import Loader from "../Loader/Loader"; // optional loading spinner


function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader message="Loading products..." />;

  return (
    <div className={classes.products_container}>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} renderAdd={true} />
      ))}
    </div>
  );
}

export default Product;

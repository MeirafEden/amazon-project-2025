import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import LayOut from "../../Components/LayOut/LayOut";
import Loader from "../../Components/Loader/Loader";
import classes from "./ProductDetail.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const { productId } = useParams();
  const [state, dispatch] = useContext(DataContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [productId]);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        description: product.description,
        amount: quantity,
      },
    });
  };

  if (isLoading) {
    return (
      <LayOut>
        <Loader message="Loading product details..." />
      </LayOut>
    );
  }

  return (
    <LayOut>
      <div className={classes.product_detail}>
        <div className={classes.card}>
          <img src={product.image} alt={product.title} />

          <div className={classes.info}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className={classes.price}>${product.price}</p>

            <div className={classes.actions}>
              <label>
                Quantity:{" "}
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </label>
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
}

export default ProductDetail;

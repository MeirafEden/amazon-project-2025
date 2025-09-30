import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "./CurrencyFormat/CurrencyFormat";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import classes from "./Product.module.css";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product;

  // ✅ Correct destructuring
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description },
    });
  };

  return (
    <div
      className={`${classes.card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>

      <div>
        <h3>{title}</h3>

        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}

        <div className={classes.rating}>
          <Rating value={rating?.rate || 0} precision={0.1} readOnly />
          <small>({rating?.count || 0})</small>
        </div>

        <CurrencyFormat amount={price} />

        {renderAdd && (
          <button className={classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;




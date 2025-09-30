
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../../Components/Product/CurrencyFormat/CurrencyFormat";
import classes from "./Cart.module.css";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  // ✅ Total price of basket
  const total = basket.reduce(
    (amount, item) => amount + item.price * (item.amount || 1),
    0
  );

  
  // ✅ Increment quantity (re-add same item)
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item:{
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        description: item.description,
        rating: item.rating,
      }, // just pass item directly
    });
  };

  // ✅ Decrement quantity / remove
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

 

  return (
    <LayOut>
      <section className={classes.container}>
        {/* Left: Shopping Basket */}
        <div className={classes.cart_container}>
          <h2>Hello, User</h2>
          <h3>Your Shopping Basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Oops! No item in your cart.</p>
          ) : (
            basket?.map((item, i) => (
              <div key={item.id} className={classes.cart_product}>
                <img src={item.image} alt={item.title} />

                <div className={classes.cart_info}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <Rating
                    value={item.rating?.rate || 0}
                    precision={0.1}
                    readOnly
                  />
                  <CurrencyFormat amount={item.price} />

                  {/* Quantity controls */}
                  <div className={classes.cart_qty}>
                    <button onClick={() => increment(item)}>
                      <IoIosArrowUp />
                    </button>
                    <span>{item.amount}</span>
                    <button onClick={() => decrement(item.id)}>
                      <IoIosArrowDown />
                    </button>
                  </div>

                  <button
                    className={classes.remove_btn}
                    onClick={() => decrement(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right: Subtotal & Checkout */}
        {basket?.length > 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>
                Subtotal (
                {basket.reduce((acc, item) => acc + (item.amount || 1), 0)}{" "}
                items)
              </p>
              <CurrencyFormat amount={total} />
            </div>

            <span className={classes.gift}>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/Payments">Continue to Checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;

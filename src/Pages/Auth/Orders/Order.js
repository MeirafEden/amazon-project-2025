import React from "react";
import LayOut from "../../../Components/LayOut/LayOut";
import classes from "./Order.module.css";
import { DataContext } from "../../../Components/DataProvider/DataProvider";

function Order() {
  return (
    <LayOut>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <section className={classes.container}>
          <div className={classes.orders_container}>
            <h2>Your Orders</h2>
            <div>
              {/* Ordered items */}
            </div>
          </div>
        </section>

        <p>Currently, you have no orders.</p>
      </div>
    </LayOut>
  );
}

export default Order;

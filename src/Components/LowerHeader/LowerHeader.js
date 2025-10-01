

import React from "react";
import { Link } from "react-router-dom";
import classes from "./LowerHeader.module.css";
import { HiOutlineMenu } from "react-icons/hi";

function LowerHeader() {
  return (
    <nav className={classes.lower_header}>
      <ul className={classes.nav_list}>
        <li className={classes.nav_item}>
          <HiOutlineMenu size={20} />
          <span>All</span>
        </li>
        <li className={classes.nav_item}>
          <Link to="/deals">Today's Deals</Link>
        </li>
        <li className={classes.nav_item}>
          <Link to="/customer-service">Customer Service</Link>
        </li>
        <li className={classes.nav_item}>
          <Link to="/registry">Registry</Link>
        </li>
        <li className={classes.nav_item}>
          <Link to="/gift-cards">Gift Cards</Link>
        </li>
        <li className={classes.nav_item}>
          <Link to="/sell">Sell</Link>
        </li>
      </ul>
    </nav>
  );
}

export default LowerHeader;

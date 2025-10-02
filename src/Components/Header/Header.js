import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

function Header() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const [showLang, setShowLang] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [lang, setLang] = useState("EN");

  const toggleLang = (code) => {
    setLang(code);
    setShowLang(false);
  };

  const handleSignOut = () => {
    dispatch({ type: Type.SET_USER, user: null });
    setShowAccount(false);
  };

  return (
    <header className={classes.header}>
      <div className={classes.top_header}>
        {/* Logo + Heart */}
        <div className={classes.logo_favorite}>
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon"
              className={classes.main_logo}
            />
          </Link>
          <IoLocationOutline className={classes.heart_icon} />
        </div>

        {/* Delivery */}
        <div className={classes.delivery_block}>
          <p>Deliver to Ethiopia</p>
          <span>
            <b>Update Location</b>
          </span>
        </div>

        {/* Search */}
        <div className={classes.search}>
          <select className={classes.search_select}>
            <option>All</option>
            <option>Books</option>
            <option>Electronics</option>
            <option>Clothing</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <button className={classes.search_btn}>
            <IoMdSearch />
          </button>
        </div>

        {/* Language dropdown with US flag */}
        <div
          className={classes.lang}
          onMouseEnter={() => setShowLang(true)}
          onMouseLeave={() => setShowLang(false)}
        >
          <div className={classes.flag_lang}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="US"
              className={classes.flag}
            />
            <span>
              {lang} <IoMdArrowDropdown />
            </span>
          </div>
          {showLang && (
            <div className={classes.dropdown}>
              <p onClick={() => toggleLang("EN")}>English</p>
              <p onClick={() => toggleLang("AM")}>Amharic</p>
              <p onClick={() => toggleLang("ES")}>Spañish</p>
            </div>
          )}
        </div>

        {/* Account & Lists */}
        <div
          className={classes.account}
          onMouseEnter={() => setShowAccount(true)}
          onMouseLeave={() => setShowAccount(false)}
        >
          <p>Hello, {user ? user.email.split("@")[0] : "Sign in"}</p>
          <span>
            <b>Account & Lists</b> <IoMdArrowDropdown />
          </span>
          {showAccount && (
            <div className={classes.dropdown}>
              {user ? (
                <>
                  <p>Your Account</p>
                  <p>
                    <b>Your Orders</b>
                  </p>
                  <p onClick={handleSignOut}>Sign Out</p>
                </>
              ) : (
                <>
                  <p>
                    <Link to="/auth">Sign In</Link>
                  </p>
                  <p>Your Orders</p>
                </>
              )}
            </div>
          )}
        </div>

        {/* Returns & Orders */}
        <div className={classes.orders}>
          <p>Returns</p>
          <span>
            <b>& Orders</b>
          </span>
        </div>

        {/* Basket */}
        <Link to="/cart" className={classes.cart}>
          <FaShoppingCart size={30} />
          <span className={classes.cart_count}>{basket?.length || 0}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;

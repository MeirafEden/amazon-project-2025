

// import React from "react";
// import { Link } from "react-router-dom";
// import classes from "./LowerHeader.module.css";

// function LowerHeader() {
//   return (
//     <div className={classes.lowerHeader}>
//       <Link to="/all">All</Link>
//       <Link to="/amazon-haul">Amazon Haul</Link>
//       <Link to="/medical-care">Medical Care</Link>
//       <Link to="/best-seller">Best Seller</Link>
//       <Link to="/amazon-basics">Amazon Basics</Link>
//       <Link to="/new-releases">New Releases</Link>
//       <Link to="/groceries">Groceries</Link>
//       <Link to="/prime">Prime</Link>
//       <Link to="/today-deals">Today’s Deals</Link>
//       <Link to="/registry">Registry</Link>
//       <Link to="/customer-service">Customer Service</Link>
//       <Link to="/gift-cards">Gift Cards</Link>
//       <Link to="/smart-home">Smart Home</Link>
//       <Link to="/sports">Sports & Outdoors</Link>
//       <Link to="/music">Music</Link>
//       <Link to="/pharmacy">Pharmacy</Link>
//       <Link to="/shop-by-interest">Shop By Interest</Link>
//       <Link to="/amazon-home">Amazon Home</Link>
//     </div>
//   );
// }

// export default LowerHeader;

// import React from "react";
// import classes from "./LowerHeader.module.css";
// import { Link } from "react-router-dom";
// import { HiOutlineMenu } from "react-icons/hi"; // hamburger menu

// function LowerHeader() {
//   return (
//     <nav className={classes.lower_header}>
//       <ul className={classes.nav_list}>
//         {/* All menu */}
//         <li className={classes.nav_item}>
//           <HiOutlineMenu size={20} />
//           <span>All</span>
//         </li>

//         <li className={classes.nav_item}>
//           <Link to="/deals">Today's Deals</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/customer-service">Customer Service</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/registry">Registry</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/gift-cards">Gift Cards</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/sell">Sell</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default LowerHeader;

// import React from "react";
// import classes from "./LowerHeader.module.css";
// import { Link } from "react-router-dom";
// import { HiOutlineMenu } from "react-icons/hi";

// function LowerHeader() {
//   return (
//     <nav className={classes.lower_header}>
//       <ul className={classes.nav_list}>
//         <li className={classes.nav_item}>
//           <HiOutlineMenu size={20} />
//           <span>All</span>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/deals">Today's Deals</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/customer-service">Customer Service</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/registry">Registry</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/gift-cards">Gift Cards</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/sell">Sell</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default LowerHeader;

// import React from "react";
// import { Link } from "react-router-dom";
// import classes from "./LowerHeader.module.css";
// import { HiOutlineMenu } from "react-icons/hi";

// function LowerHeader() {
//   return (
//     <nav className={classes.lower_header}>
//       <ul className={classes.nav_list}>
//         <li className={classes.nav_item}>
//           <HiOutlineMenu size={20} />
//           <span>All</span>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/deals">Today's Deals</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/customer-service">Customer Service</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/registry">Registry</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/gift-cards">Gift Cards</Link>
//         </li>
//         <li className={classes.nav_item}>
//           <Link to="/sell">Sell</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default LowerHeader;

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

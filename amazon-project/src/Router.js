import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Signup/Auth";
// import Payment from "./Pages/Auth/Payment";
import Orders from "./Pages/Auth/Orders/Order";
import Cart from "./Pages/Cart/Cart";
// import Results from "./Pages/Auth/Results";
import ProductDetail from "./Components/ProductDetail/ProductDetail"; 
// import ProductDetail from "./Pages/Auth/ProductDetail";
import ProtectedRoute from "./Components/ProtectRoute/ProtectedRoute";

import Payment from "./Pages/Payment";
import {Element, Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51SBhg9IOvu6kdpKLGe3McokpvAlJ4vxlmTovwwZ0AcpdnK1tOyS7YJ90frBWgZLFtgBxq3BAPhrfB1fSrINYCi3900jiKxHRSq"
);

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/Orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your Orders"}
              redirect={"/Orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/category/:categoryName" element={<Results />} /> */}
        <Route path="/Products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;

import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../Components/LayOut/LayOut";
import { DataContext } from "../Components/DataProvider/DataProvider";
import ProductCard from "../Components/Product/ProductCard";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "../Components/Product/CurrencyFormat/CurrencyFormat";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);

  // const totalItem = basket?.reduce((amount, item) => amount + item.amount, 0);
   
  const total = basket.reduce(
    (amount, item) => amount + item.price * (item.amount || 1),
    0
  );

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCardError(e?.error?.message || "");
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setCardError(null);

    if (!stripe || !elements) {
      setCardError("Stripe has not loaded yet.");
      setProcessing(false);
      return;
    }

    try {
      // 1️⃣ Create PaymentIntent via Express backend
      const response = await fetch(
        `http://localhost:5000/payment/create?total=${Math.round(total * 100)}`,
        { method: "POST" }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Backend error: ${errorText}`);
      }

      const data = await response.json();
      const clientSecret = data.clientSecret || data.clientsecret; // match your backend

      if (!clientSecret) {
        throw new Error("Failed to get client secret from backend.");
      }

      // 2️⃣ Confirm payment with Stripe
      const confirmation = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (confirmation.error) {
        setCardError(confirmation.error.message);
        setProcessing(false);
        return;
      }

      const paymentIntent = confirmation.paymentIntent;
      console.log("Payment successful:", paymentIntent);

      // 3️⃣ Redirect or show success message
      navigate("/Orders", { state: { msg: "You have placed a new order!" } });
    } catch (error) {
      console.error("Payment error:", error);
      setCardError(error.message);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <LayOut>
      <div className={classes.payment_header}>
        Checkout{" "}
        <p>
           ({basket?.reduce((acc, item) => acc + (item.amount || 1), 0)}{" "}
          )
        </p>{" "}
         items
      </div>

      <section className={classes.payment}>
        {/* Address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>131 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>

        <hr />

        {/* Review Items */}
        <div className={classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {basket?.map((item, i) => (
              <ProductCard key={item.id || i} product={item} flex={true} />
            ))}
          </div>
        </div>

        <hr />

        {/* Payment */}
        <div className={classes.flex}>
          <h3>Payment Method</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}
                <CardElement onChange={handleChange} />
                <div className={classes.payment_price}>
                  <span style={{ display: "flex", gap: "10px" }}>
                    <p>Total Order |</p>
                    <CurrencyFormat amount={total} />
                  </span>
                  <button type="submit" disabled={!stripe || processing}>
                    {processing ? (
                      <div className={classes.loading}>
                        <ClipLoader color="gray" size={13} />
                        <p>Please wait</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;

// import React, { useContext, useState } from "react";
// import classes from "./Payment.module.css";
// import LayOut from "../Components/LayOut/LayOut";
// import { DataContext } from "../Components/DataProvider/DataProvider";
// import ProductCard from "../Components/Product/ProductCard";
// // import { axiosInstance } from "../Api/axios";
// // import { db } from "../Utility/firebase";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import CurrencyFormat from "../Components/Product/CurrencyFormat/CurrencyFormat";
// import { ClipLoader } from "react-spinners";
// import { useNavigate } from "react-router-dom";

// function Payment() {
//   const [{ user, basket }] = useContext(DataContext);

//   const totalItem = basket?.reduce((amount, item) => amount + item.amount, 0);
//   const total = basket.reduce(
//     (amount, item) => amount + item.price * (item.amount || 1),
//     0
//   );

//   const [cardError, setCardError] = useState(null);
//   const [processing, setProcessing] = useState(false);

//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCardError(e?.error?.message || "");
//   };

//   // Payment.js - inside handlePayment
//   // const handlePayment = async (e) => {
//   //   e.preventDefault();
//   //   setProcessing(true);

//   //   try {
//   //     // 1. Get client secret from backend
//   //     const response = await axiosInstance.post("/payment/create", null, {
//   //       params: { total: Math.round(total * 100) }, // Stripe expects amount in cents as integer
//   //     });

//   //     const clientSecret = response.data?.clientSecret;

//   //     // 2. Confirm payment with Stripe
//   //     const confirmation = await stripe.confirmCardPayment(clientSecret, {
//   //       payment_method: {
//   //         card: elements.getElement(CardElement),
//   //       },
//   //     });

//   //     const { paymentIntent } = confirmation;

//   //     // 3. Save order in Firestore
//   //     await db
//   //       .collection("users")
//   //       .doc(user.uid)
//   //       .collection("Orders")
//   //       .doc(paymentIntent.id)
//   //       .set({
//   //         basket:basket,
//   //         amount: paymentIntent.amount,
//   //         created: paymentIntent.created,
//   //       });

//   //     console.log("Payment successful:", paymentIntent);
//   //     navigate("/Orders", {state:{msg:"A you have placed new Order"}});
//   //   } catch (error) {
//   //     console.error("Payment error:", error);
//   //   } finally {
//   //     setProcessing(false);
//   //   }
//   // };

//   // const handlePayment = async (e) => {
//   //   e.preventDefault();
//   //   setProcessing(true);
//   //   setCardError(null);

//   //   try {
//   //     if (!stripe || !elements) {
//   //       setCardError("Stripe has not loaded yet.");
//   //       setProcessing(false);
//   //       return;
//   //     }

//   //     // 1️⃣ Get client secret from backend
//   //     const response = await axiosInstance.post("/payment/create", null,
//   //        {
//   //       params: { total: Math.round(total * 100) }
//   //        // Stripe expects amount in cents

//   //     });

//   //     const clientSecret = response.data?.clientSecret;
//   //     if (!clientSecret) {
//   //       setCardError("Failed to get client secret from backend.");
//   //       setProcessing(false);
//   //       return;
//   //     }

//   //     // 2️⃣ Confirm payment with Stripe
//   //     const confirmation = await stripe.confirmCardPayment(clientSecret, {
//   //       payment_method: {
//   //         card: elements.getElement(CardElement),
//   //       },
//   //     });

//   //     if (confirmation.error) {
//   //       console.error("Payment failed:", confirmation.error.message);
//   //       setCardError(confirmation.error.message);
//   //       setProcessing(false);
//   //       return;
//   //     }

//   //     const paymentIntent = confirmation.paymentIntent;
//   //     if (!paymentIntent) {
//   //       setCardError("Payment failed. No payment intent returned.");
//   //       setProcessing(false);
//   //       return;
//   //     }

//   //     // 3️⃣ Save order in Firestore
//   //     await db
//   //       .collection("users")
//   //       .doc(user.uid)
//   //       .collection("Orders")
//   //       .doc(paymentIntent.id)
//   //       .set({
//   //         basket: basket,
//   //         amount: paymentIntent.amount,
//   //         created: paymentIntent.created,
//   //       });

//   //     console.log("Payment successful:", paymentIntent);

//   //     // 4️⃣ Redirect or show success message
//   //     navigate("/Orders", { state: { msg: "You have placed a new order!" } });
//   //   } catch (error) {
//   //     console.error("Payment error:", error);
//   //     setCardError("Payment failed. Please try again.");
//   //   } finally {
//   //     setProcessing(false);
//   //   }
//   // };

//   return (
//     <LayOut>
//       {/* Header */}
//       <div className={classes.payment_header}>Checkout ({totalItem}) items</div>

//       <section className={classes.payment}>
//         {/* Address */}
//         <div className={classes.flex}>
//           <h3>Delivery Address</h3>
//           <div>
//             <div>{user?.email}</div>
//             <div>131 React Lane</div>
//             <div>Chicago, IL</div>
//           </div>
//         </div>

//         <hr />

//         {/* Review Items */}
//         <div className={classes.flex}>
//           <h3>Review items and Delivery</h3>
//           <div>
//             {basket?.map((item, i) => (
//               <ProductCard key={item.id || i} product={item} flex={true} />
//             ))}
//           </div>
//         </div>

//         <hr />

//         {/* Payment */}
//         <div className={classes.flex}>
//           <h3>Payment Method</h3>
//           <div className={classes.payment_card_container}>
//             <div className={classes.payment_details}>
//               <form onSubmit={handlePayment}>
//                 {cardError && (
//                   <small style={{ color: "red" }}>{cardError}</small>
//                 )}

//                 <CardElement onChange={handleChange} />

//                 <div className={classes.payment_price}>
//                   <span style={{ display: "flex", gap: "10px" }}>
//                     <p>Total Order |</p>
//                     <CurrencyFormat amount={total} />
//                   </span>
//                   <button type="submit" disabled={!stripe || processing}>
//                     {processing ? (
//                       <div className={classes.loading}>
//                         <ClipLoader color="gray" size={13} />
//                         <p>Please wait</p>
//                       </div>
//                     ) : (
//                       "Pay Now"
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </LayOut>
//   );
// }

// export default Payment;

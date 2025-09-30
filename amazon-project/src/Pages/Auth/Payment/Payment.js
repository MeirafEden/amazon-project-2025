// // import React from 'react'
// // import classes from './Payment.module.css'
// // import LayOut from '../../../Components/LayOut/LayOut';


// // function Payment() {
// //   return (
// //     <LayOut>

// //       <div>Payment</div>

// //     </LayOut>
// //   );
// // }

// // export default Payment

// import React, { useState } from "react";
// import LayOut from "../../../Components/LayOut/LayOut";
// import classes from "./Payment.module.css";

// function Payment() {
//   const [billingInfo, setBillingInfo] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//   });

//   const [paymentMethod, setPaymentMethod] = useState("card");

//   const handleChange = (e) => {
//     setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
//   };

//   const handlePlaceOrder = () => {
//     console.log("Order placed!", billingInfo, paymentMethod);
//     alert("Order placed successfully!");
//   };

//   return (
//     <LayOut>
//       <div className={classes.payment_container}>
//         <h2 className={classes.payment_header}>Checkout / Payment</h2>

//         {/* Billing Section */}
//         <div className={classes.payment_section}>
//           <h3>Billing Information</h3>
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={billingInfo.name}
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={billingInfo.email}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="address"
//             placeholder="Address"
//             value={billingInfo.address}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             value={billingInfo.city}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="state"
//             placeholder="State"
//             value={billingInfo.state}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             name="zip"
//             placeholder="ZIP / Postal Code"
//             value={billingInfo.zip}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Payment Section */}
//         <div className={classes.payment_section}>
//           <h3>Payment Method</h3>
//           <label>
//             <input
//               type="radio"
//               name="payment"
//               value="card"
//               checked={paymentMethod === "card"}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />
//             Credit / Debit Card
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="payment"
//               value="paypal"
//               checked={paymentMethod === "paypal"}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             />
//             PayPal
//           </label>
//         </div>

//         <button className={classes.payment_button} onClick={handlePlaceOrder}>
//           Place Order
//         </button>
//       </div>
//     </LayOut>
//   );
// }

// export default Payment;

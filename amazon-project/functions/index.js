const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors"); // ✅ corrected import
const dotenv = require("dotenv");
dotenv.config();

const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Test endpoint
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Success!",
//   });
// });C

// Example Stripe endpoint
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;
   

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    res.status(200).json({ clientsecret: paymentIntent.client_secret });
  } catch (error) {
    logger.error("Stripe error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/payment/create", async(req, res)=>{

  const total = parseInt(req.query.total);

  if(total > 0){
    const paymentIntent = await stripe.paymentIntents.create({
      amount:total,
      currency: "usd"
    })
    console.log(paymentIntent);
    res.status(201).json({
      clientsecret:paymentIntent.client_secret,
    });
  }else {
    res.status(403).json({
      message: "total must be greater than 0",
    });
  }
});

// app.post("/payment/create", async (req, res) => {
//   // const total = req.query.total;
//   const total = parseInt(req.query.total, 10);
//   console.log("Payment request received for this amount:", total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total, // must be an integer (cents)
//     currency: "usd",
//   });

//   res.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });


// Export as Firebase function
exports.api = functions.https.onRequest(app);

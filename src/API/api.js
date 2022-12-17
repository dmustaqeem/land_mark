// const express = require("express");
// const app = express();

// const stripe = require("stripe")(
//   "sk_test_51MEy5fGUbdjGry3kebFx4HlF7eF1Skrf7lAXc4eFVZS5uYvr8UbGLbKa7t3t126uJdKmNq6UMJcgyoCnokHEtDLz00lxw3lBgD"
// );

// app.use(express.static("public"));
// app.use(express.json());

// app.post("/create-payment-intent", async (req, res) => {
//   const { price } = req;

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: price,
//     currency: "usd",
//     payment_method_types: ["card"],
//   });

//   res.send({
//     clientSecret: paymentIntent.clientSecret,
//   });
// });

// app.listen(4242, () => console.log("Node server listening on port 4242!"));

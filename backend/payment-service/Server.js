const express = require("express");
const app = express();
const stripe = require("stripe")(
  "sk_test_51MEy5fGUbdjGry3kebFx4HlF7eF1Skrf7lAXc4eFVZS5uYvr8UbGLbKa7t3t126uJdKmNq6UMJcgyoCnokHEtDLz00lxw3lBgD"
);
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Payment service is live!" });
});

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({ clientSecret: paymentIntent.client_secret });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

const port = process.env.PORT;
const username = process.env.DB_USER_NAME;
const password = process.env.DB_USER_PASS;

const auth = require("./routes/auth");
const uri = `mongodb+srv://${username}:${password}@lndmrkcluster.mqpvvka.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(uri, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => console.log("Monogo is running"))
  .catch((error) => console.log("Error while connecting to atlas", error));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", auth);

app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});

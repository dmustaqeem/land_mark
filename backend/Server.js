const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const auth = require("./routes/auth");
const { verifyUserEmail } = require("./middleware/authMiddleware");
const uri = `mongodb+srv://lndmrkUser:lndmrkPassword@lndmrkcluster.mqpvvka.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(uri, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => console.log("Monogo is running"))
  .catch((error) => console.log("Error while connecting to atlas", error));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/auth", auth);

// app.get("/api/verify", (req, res) => {
//   verifyUserEmail(req);
//   return res.status(200).send("Success");
// });

app.listen(4242, () => {
  console.log(`Listening to port 4242...`);
});

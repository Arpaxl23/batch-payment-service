const express = require("express");
const paymentRoute = require("./routes/paymentRoute");

const app = express();

app.use(express.json());
app.use("/api", paymentRoute);

module.exports = app;
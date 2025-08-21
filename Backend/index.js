require("dotenv").config();
const express = require("express");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get("/allholdings", async (req, res) => {
  let allholdings = await HoldingsModel.find({}); //fetch everything
  res.json(allholdings);
});
app.get("/allpositions", async (req, res) => {
  let allpositions = await PositionsModel.find({}); //fetch everything
  res.json(allpositions);
});
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,

    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("order saved");
});
app.listen(PORT, () => {
  console.log(`App is listening ${PORT}`);
  mongoose.connect(uri);
  console.log("DB Connected");
});

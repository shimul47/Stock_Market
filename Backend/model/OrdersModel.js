const { model } = require("mongoose");
// const { OrdersSchema } = require("../Schema/OrdersSchema");
const { OrdersSchema } = require("../Schemas/OrdersSchema");
const OrdersModel = new model("order", OrdersSchema);
module.exports = { OrdersModel };

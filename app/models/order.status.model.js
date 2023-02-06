const mongoose = require("mongoose");

const OrderStatus = mongoose.model(
  "OrderStatus",
  new mongoose.Schema({
    name: String
  })
);

module.exports = OrderStatus;

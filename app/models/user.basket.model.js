const mongoose = require("mongoose");

const UserBasket = mongoose.model(
  "UserBasket",
  new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId,ref: "User"},
    quantity: Number,
    goods: 
      {    type: mongoose.Schema.Types.ObjectId, ref: "Tutorial"}  
  })
);

module.exports = UserBasket;
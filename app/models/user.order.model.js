const mongoose = require("mongoose");

const UserOrder = mongoose.model(
  "UserOrder",
  new mongoose.Schema({
    firstname: String,

    surname: String,
    email: String,
    telephone: String,
    adress: String,
    totalamount : Number,
    user: {type: mongoose.Schema.Types.ObjectId,ref: "User"},
    orderstatus: {type: mongoose.Schema.Types.ObjectId,ref: "OrderStatus"},
         goods: [
    {good:{type: mongoose.Schema.Types.ObjectId,ref: "Tutorial"},quantity : Number,amount : Number},
    ]
  })
);

module.exports = UserOrder;

/*

const mongoose = require("mongoose");

const UserOrder = mongoose.model(
  "UserOrder",
  new mongoose.Schema({
    firstname: String,

  })
);

module.exports = UserOrder;



surname: String,
email: String,
telephone: String,
adress: String,
totalamount : Number,
user: {type: mongoose.Schema.Types.ObjectId,ref: "User"},
//  status: {type: mongoose.Schema.Types.ObjectId,ref: "Status"},
     goods: [
//      {type: mongoose.Schema.Types.ObjectId,ref: "Tutorial"},
  {good:{type: mongoose.Schema.Types.ObjectId,ref: "Tutorial"}},
  {quantity : Number},
  {amount : Number}
] */
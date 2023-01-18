const db = require("../models");
const UserBasket = db.userbasket;

//Получить все записанные корзины пользователя
//exports.getAll = (req, res) => {
  exports.findAll = (req, res) => {
  
  //var condition = req.query.user;
  console.log("&&&&&------",req.query);

  var condition =  {};

  UserBasket.find(condition)
    .then(data => {
  //      console.log("&&&&&------",data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};








exports.create = (req, res) => {
  
//  console.log("&&&&&------");
  // Create a UserBasket
  const userbasket = new UserBasket({
    
    user: req.body.user,
    goods: req.body.goods,
    quantity: req.body.quantity
  });

  // Save userbasket in the database
  userbasket
    .save(userbasket)
    .then(data => {
    
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the UserBasket."
      });
    });
};


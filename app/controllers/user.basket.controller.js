const db = require("../models");
const UserBasket = db.userbasket;

const Tutorial = db.tutorials;


//Получить все записанные корзины пользователя

  exports.findAll =  (req, res) => {
  
  //var condition = req.query.user;
//  console.log("&&&&&------");

  const id = req.params.id;
//console.log("&&&&&------",id);
  var condition =  {user : id};

 
  UserBasket
  .find(condition)
//  .find({_id:'63c824a3d189d3dbabc1ecb9' })
//   .populate('goods')
.populate({ path: 'goods', model: Tutorial })
    .then(data => {

        console.log("&&&&&------",data);
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


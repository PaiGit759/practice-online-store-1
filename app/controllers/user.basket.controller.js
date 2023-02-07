const db = require("../models");
const UserBasket = db.userbasket;

const Tutorial = db.tutorials;


//Получить все записанные корзины пользователя

  exports.findAll =  (req, res) => {
  
  const id = req.params.id;
//console.log("&&&&&------",id);
  var condition =  {user : id};

 
  UserBasket
  .find(condition)
.populate({ path: 'goods', model: Tutorial })
    .then(data => {

//        console.log("&&&&&------",data);
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

//Удалить корзину пользователя с указанным id:
exports.delete = (req, res) => {
  const id = req.params.id;
    console.log("&&&&&------",id);

/* 
  UserBasket.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });

 */
};

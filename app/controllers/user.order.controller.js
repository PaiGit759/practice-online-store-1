const db = require("../models");
const UserOrder = db.userorder;

const Tutorial = db.tutorials;

/* 
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
 */


exports.create = (req, res) => {
  
//  console.log("&&&&&------",req.body);

  const rowData = req.body.goods.map((elem) => {
    // let xxx = Math.round(elem.quantity * elem.goods.price * (1 - elem.goods.discount / 100));
    // itsum += xxx;
    let vvv = { good: elem.id, quantity: elem.quantity , amount: elem.amount}
  //  let vvv = {  quantity: elem.quantity, amount: elem.amount }
    return vvv;
  });



  // Create a UserBasket
   const userorder = new UserOrder({
    
    user: req.body.user,
    
    firstname: req.body.firstname,
    surname: req.body.surname,
    telephone: req.body.telephone,
    email: req.body.email,
    totalAmount: req.body.totalAmount,


   goods: rowData,

  });

  console.log("*&&&&&------",rowData);

   
//http://localhost:8080/
  // Save userbasket in the database
  userorder
    .save(userorder)
    .then(data => {
    
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the UserOrder."
      });
    }); 

 


};


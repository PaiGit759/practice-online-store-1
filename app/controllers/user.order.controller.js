const db = require("../models");
const UserOrder = db.userorder;

const Tutorial = db.tutorials;

const OrderStatus = db.orderstatus;

 
//Получить все записанные корзины пользователя

  exports.findAll =  (req, res) => {
  
  const id = req.params.id;
//console.log("&&&&&------",id);
  var condition =  {user : id};

 
  UserOrder
  .find(condition)
.populate({ path: 'orderstatus', model: OrderStatus })
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

  const rowData = req.body.goods.map((elem) => {
    let vvv = { good: elem.id, quantity: elem.quantity, amount: elem.amount }
    return vvv;
  });

  // Create a UserBasket
  const userorder = new UserOrder({

    user: req.body.user,

    firstname: req.body.firstname,
    surname: req.body.surname,
    telephone: req.body.telephone,
    email: req.body.email,
    totalamount: req.body.totalamount,
    adress: req.body.adress,
    goods: rowData,
    orderstatus: undefined,

  });



  OrderStatus.findOne({ name: "formed" }, (err, status) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    userorder.orderstatus = status._id;


  // Save userorder in the database
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

  });

  //console.log('NNNNN', userorder.orderstatus)

  // userorder.orderstatus = orderstatus._id;






    
};


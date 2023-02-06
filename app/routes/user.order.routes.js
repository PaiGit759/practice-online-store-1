module.exports = app => {
    const userorders = require("../controllers/user.order.controller.js");
  
    var router = require("express").Router();
  
// Retrieve all userorders
//router.get("/", userbaskets.findAll);
//router.get("/:id", userorders.findAll);


    // Create a new userorders
    router.post("/", userorders.create);
    app.use('/api/userorders', router);

  };
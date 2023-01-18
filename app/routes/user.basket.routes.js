module.exports = app => {
    const userbaskets = require("../controllers/user.basket.controller.js");
  
    var router = require("express").Router();
  
// Retrieve all Userbasket
router.get("/", userbaskets.findAll);

    // Create a new Userbasket
    router.post("/", userbaskets.create);
    app.use('/api/userbaskets', router);

  };
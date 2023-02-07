module.exports = app => {
    const userbaskets = require("../controllers/user.basket.controller.js");
  
    var router = require("express").Router();
  
// Retrieve all Userbasket
//router.get("/", userbaskets.findAll);
router.get("/:id", userbaskets.findAll);

// Delete a Userbasket with id
router.delete("/:id", userbaskets.delete);

    // Create a new Userbasket
    router.post("/", userbaskets.create);
    app.use('/api/userbaskets', router);

  };
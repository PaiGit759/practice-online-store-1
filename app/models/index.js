const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);

const db = {};
db.mongoose = mongoose;
 db.tutorials = require("./tutorial.model.js")(mongoose);

db.user = require("./user.model");//(mongoose);
db.role = require("./role.model");//(mongoose);


db.ROLES = ["user", "admin", "moderator"];

db.userbasket = require("./user.basket.model");//(mongoose);
db.userorder = require("./user.order.model");//(mongoose);
db.orderstatus = require("./order.status.model");//(mongoose);

module.exports = db;

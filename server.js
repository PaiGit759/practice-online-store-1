const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = __dirname + '/app/views/';

const app = express();
app.use(express.static(path));

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Practical work" });
// });

app.get('/', function (req, res) {
  res.sendFile(path + "index.html");
});

/* app.post("/download", (req, res) => {
  console.log('*****', req.body);
//  res.json({ message: "*****Practical work" });
  res.send('9999')
});
 */
// set port, listen for requests
const PORT = process.env.PORT || 8080;

require("./app/routes/tutorial.routes")(app);
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

require('./app/routes/user.basket.routes')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
const Role = db.role;

const UserBasket = db.userbasket;

// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//     console.log("!",Role);
//   //  initial();
//   })
//   .catch((err) => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

const mongoDB = "mongodb+srv://pai:MongoPai789@paipractice9.mk7qxu7.mongodb.net/test";

db.mongoose
  .connect(`${mongoDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {

  //console.log(UserBasket);
/* 
  new UserBasket({
//    name: "moderator"
  }).save(err => {
    if (err) {
      console.log("error", err);
    }

    console.log("added UserBasket to collection");
  });
 */

  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}


////

//node server.js
//http://localhost:8080/

//xcode-select --install
//Установить brewс помощью официального  Homebrew installation instructions https://brew.sh/#install
//brew tap mongodb/brew
//brew update
//brew install mongodb-community@6.0

//To run MongoDB as a macOS service => brew services start mongodb-community@6.0
//To stop a mongod running as a macOS service => brew services stop mongodb-community@6.0


//npm start
//
//npm run build

////http://localhost:8080/api/auth/signup

// {
//   "username" : "pai"
//   "email" : "panig789@gmail.com"
//   "password" : "Pai321789"
//   "roles" : ["admin"]
//   }

//MongoDb Atlas pai MongoPai789 paileleka@gmail.com https://cloud.mongodb.com/

//mongodb+srv://pai:MongoPai789@paipractice9.mk7qxu7.mongodb.net/test

//npm install fs --save 
//npm install env-cmd 

//npm run build:local
//npm run build:production

//npm install @material/data-table  "react-dom": "^18.2.0",

//npm i ag-grid-community
//npm i ag-grid-react
//npm i @ag-grid-community/core
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//const app = express();
const fs = require('fs');

//
const path = __dirname + '/app/views/';
//const path = __dirname + '/app/public/';

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

app.post("/download", (req, res) => {
  console.log('*****', req.body);
//  res.json({ message: "*****Practical work" });
  res.send('9999')
}); 

// set port, listen for requests
const PORT = process.env.PORT || 8080;

require("./app/routes/tutorial.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
 

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
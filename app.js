// Required Modules
const express = require("express");
const routes = require("./routes/index");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();
//App Variables

//App Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Routes Definitions
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.pug");
});

//Server Activation
app.listen(3000, () => {
  console.log("App listening on 3000.");
});

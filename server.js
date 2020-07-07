// Initialize Node.js packages
var bodyParser = require("body-parser");
var express = require("express");
var exphbs = require("express-handlebars");

// Initialize Express.js server and defines port
var app = express();
var PORT = process.env.PORT || 8080;

// Set up data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up Handlebars.js
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Load static files
app.use(express.static("./public"));

// Start Express.js server
app.listen(PORT, function () {
    console.log("This app is listening on PORT: " + PORT + ".");
});

// DEPENDENCIES
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.port || 8080;

// creates the application/Json parser
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended : false})

// parse different custom json types as json
app.use(bodyParser.json({ type: "application/**json" }))
// parse some custom data into a buffer
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }))
// parse an html body into a string
app.use(bodyParser.text({ type: "text/html" }))

//listener for server
app.listen(PORT, function() {
    console.log("APP Listening on Port: " + PORT);
});
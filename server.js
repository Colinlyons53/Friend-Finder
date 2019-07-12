// DEPENDENCIES
var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var Port = process.env.port || 8080;

// creates the application/Json parser
var jsonParser = bodyParser.json()
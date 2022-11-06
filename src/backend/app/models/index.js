// load the db.config.js file 
const dbConfig = require("../config/db.config")

//Setup or Load mongoose
const mongoose = require("mongoose");


//Here mongoose is a variable we are passing  
const User = require('./user.model')(mongoose);

//Setup the database object
const db = {};

db.url = dbConfig.url;

db.mongoose = mongoose;

db.User = User;


module.exports = db;
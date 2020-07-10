var express = require('express');
var mongoose = require('mongoose');
var todoController = require('./controllers/todocontroller');
var app = express();

//setup template engine
app.set('view engine','ejs');
//static file
app.use(express.static('./public'));
//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log("You are listening to port 3000");

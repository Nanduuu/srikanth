//var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var routers = require('./email');
var login = require('./login');
var optcpt = require('./optcpt');
var dailySenarios = require('./dailySenarios');

var jsonParser  = bodyParser.json();
var urlencodedparser = bodyParser.urlencoded({extended:true});




var port = process.env.PORT || 8080;

var http= require('http');
app.use(express.static('public/build'));
app.use('/email/',routers);
app.use('/login/',login);
app.use('/optcpt/',optcpt);
app.use('/dailySenarios/',dailySenarios);



app.use(bodyParser.json());
//app.use(urlencodedparser);






var server = http.createServer(app);

server.listen(port);







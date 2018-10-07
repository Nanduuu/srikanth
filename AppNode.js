
var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var routers = require('./email');
var login = require('./login');
var optcpt = require('./optcpt');
var dailySenarios = require('./dailySenarios');
var fileupload = require('./fileLoad');


var jsonParser  = bodyParser.json();
var urlencodedparser = bodyParser.urlencoded({extended:true});




var port = process.env.PORT || 8080;

var http= require('http');
//app.use(express.static('public/build'));
app.use('/email/',routers);
app.use('/login/',login);
app.use('/optcpt/',optcpt);
app.use('/dailySenarios/',dailySenarios);
app.use('/fileLoad/', fileupload);




app.use(bodyParser.json());
//app.use(urlencodedparser);



if (process.env.NODE_ENV === 'production') {
  // Serve any static filess
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}



var server = http.createServer(app);

server.listen(port);







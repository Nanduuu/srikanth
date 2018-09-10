var express = require('express');
var app = express();
var login = express.Router();
var bodyParser = require('body-parser');
var jsonParser  = bodyParser.json();
var urlencodedparser = bodyParser.urlencoded({extended:true});


login.post('/',urlencodedparser,function(req,res){

	if (req.body.uname == "Sribabu" && req.body.password == "Doordie"){
		res.send ({msg:"Success"});
	}else{
		res.send ({msg:"Incorrect"});
	}




})

module.exports = login;
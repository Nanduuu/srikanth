var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var jsonParser  = bodyParser.json();
var urlencodedparser = bodyParser.urlencoded({extended:true});
var fs = require('fs');
const csv=require('csvtojson');
const excelToJson = require('convert-excel-to-json');



router.get('/',function(req,res){

		const result = excelToJson({
    	sourceFile: 'optcpt.xlsx',
    
    
		});

		if(result != undefined){
			res.send({msg : result});
		}



})



module.exports = router; 
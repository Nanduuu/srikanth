var fs = require('fs');
var express = require('express');
var app = express();
const fileUpload = require('express-fileupload');
var router = express.Router();
var formidable = require('formidable');
var busboy = require('connect-busboy');
var multer = require('multer');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var jsonParser  = bodyParser.json();
var urlencodedparser = bodyParser.urlencoded({extended:true});
app.use(bodyParser.json());
app.use(fileUpload());
var upload = multer();
app.use(upload.array()); 
app.use(bodyParser.json()); 


router.post ('/',urlencodedparser, function(req,res){
	var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
    	console.log(fields);
    	if(fields.uname === "Srikanth" && fields.pword=== "Doordie"){
    
   		if(files.resume !== undefined && ( files.resume.name === "optcpt.xlsx" || files.resume.name === "dailySenarios.xlsx" ) ){
   			var oldpath = files.resume.path;
    			var newpath = './' + files.resume.name;
   			fs.rename(oldpath, newpath, function (err) {
    		if (err) throw err;
					res.send({msg:'File uploaded and moved!'});
      	})
  	     }else{
    			res.send({msg:"No file"});
    	 }	
    	 }else{
    			res.send({msg:"Please enter correct username and possword"});
     	}
      });
})
router.get('/',function(req,res){
	res.send("Wrong URL");
})
module.exports = router;
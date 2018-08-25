var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var jsonParser  = bodyParser.json();
var urlencodedparser = bodyParser.urlencoded({extended:true});

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'srikanthbaburao@yahoo.com',
    pass: 'password@123'
  }
});

var mailOptions = {
  from: 'srikanthbaburao@yahoo.com',
  to: 'nandakumarvn01@gmail.com,baburao.srikanth@gmail.com',
  subject: 'Request notification from 27-Tech',
  html: '<h1>Goood morning</h1> <p>Have a nice day my dear friend</p> <button>Clicl me</button>'
}; 



router.get('/',function(req,res){

	console.log("in server");
		transporter.sendMail(mailOptions, function(error, info){
  				if (error) {
  			  console.log(error);
  				} else {
   				 console.log('Email sent: ' + info.response);
   				 res.send( {msg:"Email sent"});
 		 }
		}); 
	


})

router.post('/',urlencodedparser,function(req,res){

  

	mailOptions.html = '<h4>' + "Name :" + req.body.name + '<h4>' +
						'<h4>' + "Start Date :" + req.body.date + '<h4>' +
						'<h4>' + "Technology :" + req.body.tech + '<h4>' +
						'<h4>' + "Time :" + req.body.time + '<h4>' +
						'<h4>' + "Email ID :" + req.body.email + '<h4>' +
						'<h4>' + "Brief about requirment :" + req.body.breif + '<h4>' ;

	transporter.sendMail(mailOptions, function(error, info){
  				if (error) {
  			  console.log(error);
  				} else {
   				 console.log('Email sent: ' + info.response);
           console.log(req.body.name);
   				 res.send( {msg:"Email received and will get back to you soon"});
 		 }
		}); 
	
})



module.exports = router; 
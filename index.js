const express = require('express');
const appConfig = require('./config/appConfig');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const helmet = require('helmet');
const path = require('path');
var upload = multer();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({urlencoded:false}));
app.use(cookieParser());
app.use(upload.array());
app.use(helmet());

let routesPath = './routes';
fs.readdirSync(routesPath).forEach(function(file){
	if(file.indexOf('.js')){
		let route = require(routesPath + '/' + file)
		console.log(file)
		route.setRouter(app);
	}
})

let modelPath = './models';
fs.readdirSync(modelPath).forEach(function(file){
	if(file.indexOf('.js')){
		 require(modelPath + '/' + file)
		
	}
})

app.use( express.static( __dirname +'/dist/my-dream-app/')) 
app.use( express.static( __dirname +'/images/')) 

app.get('/api/images/*', function(req,res){
	console.log(req.originalUrl)
	 res.sendFile(path.join(__dirname, req.originalUrl));
})

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/my-dream-app/index.html'));
  });

app.listen(appConfig.port, (port)=> {
	console.log(`Servet started at ${appConfig.port} ....`)
	let db = mongoose.connect(appConfig.db.url,{useNewUrlParser:true})
});

mongoose.connection.on('error',function(error){
	console.log(error);
})

mongoose.connection.on('open',function(error){
	if(error){
		console.log('issue at database');
	}else{
		console.log('data base connection open successful');
	}
})
	
	
	

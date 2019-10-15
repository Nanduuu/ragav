const mongoose = require('../models/user');
const shortid = require('shortid');
const time = require('../libs/timeLib');
const response = require('../libs/responseLib');
const logger = require('../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib');
const check = require('../libs/checkLib');
const passwordLib = require('../libs/generatePasswordLib');
const token = require('../libs/tokenLib');


/* Models */
const UserModel = mongoose.userModel;




let getData = (req,res)=>{
	
	let data =[
		{
			path : '/api/images/la.jpg',
			title : 'First Slide',
			desc : 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
		},
		{
			path : '/api/images/ny.jpg',
			title : 'Second Slide',
			desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		},
		{
			path : '/api/images/activities-1-1.jpg',
			title : 'Third Slide',
			desc : 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
		},
	
	];
	
	let responseData = response.data = data;
	res.send(responseData);
	
}




module.exports = {

   	getData:getData,

}// end exports
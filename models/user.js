const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let user = new Schema(
    {
       userId : {
           type:String,
           unique:true,
       },
        firstName: {
            type: String,
            default: ''
        },
        lastName: {
            type: String,
            default: ''
        },

        email : {
            type:String,
            unique :true,
            required:true,
        },

        mobileNumber : {
            type:Number,
            default:0,
        },

        password : {
          type: String,
          required:true,
        } ,

        createdOn : {
            type : Date,
            default:'',
        }
    }

)

var userModel = mongoose.model('user',user);

module.exports = {userModel: userModel};
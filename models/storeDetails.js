const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    storeId : {
        type:String,
        required:true,
    },
    storeType : {
        type: String,
        required : true,
    },
    storeName : {
        type: String,
        required: true
    },
   imageOnePath : {
        type:String,
        default : null,
   } ,
   imageTwoPath : {
    type:String,
        default : null,
    } ,
    imageThreePath : {
        type:String,
        default : null,
    } ,
    imageFourPath : {
        type:String,
        default : null,
    } ,
    address : {
        type : String,
        default : "",
    },
    phoneNumber : {
        type : String,
        default : null,
    },
    fromTime : {
        type : Date,
        required : true,
    },
    toTime :{
        type : Date,
        required : true,
    },
    about : {
        type :String,
        default : 'Loading ....',
    }
});

module.exports = { 

    storeDetails :  mongoose.model("storeDetails", schema)

} 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema  = new Schema({
  storeType : {
    type: String,
    required: true,
    unique:true,
  } ,
  imagePath : {
      type:String,
      required:true,
  },
  lastModified: {
    type : Date,
    default : Date.now(),
  }


});

module.exports = {

    stores :  mongoose.model("stores",schema )

} 
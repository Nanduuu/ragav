const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSlide = new Schema({
  imagePath : {
    type: String,
    required: true
  } 
});

module.exports = {
    imageSlide :  mongoose.model("imageSlide", imageSlide)
}
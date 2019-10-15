const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let movies = new Schema(
    {
       movieId : {
           type:String,
           unique:true,
       },

        movieName : {
            type:String,
            unique:true,
        },

        theater : {
            type:String,
            required:true,
        },

        shows : {
          type: Array,
          unique:false,
        } 


    }

)

var moviesModel = mongoose.model('movies',movies);

module.exports = {moviesModel:moviesModel};
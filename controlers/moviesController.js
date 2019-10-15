const  express = require('express');
const mongoose = require('mongoose');
const shortid = require('shortid');
const model = require('../models/movies');
const lib = require('../libs/responseLib');

let moviesModel = model.moviesModel;

let addMovies = (req,res)=>{

    let id = shortid.generate();

    let newDocument = new moviesModel({
       
        movieId : id,
        movieName : req.body.name,
        theater : req.body.theater,
        shows : []

    })
    console.log(newDocument);
    newDocument.save((err,result)=>{
        if(err){
            console.log(err)
            let apiResponse = lib.generate(true,'Database issue',500,err);
            res.send(apiResponse);
        }else{

            let apiResponse = lib.generate(false,'Movie details saved',200,result)
            res.send(result);
        }
    })

}

let updateMovies = (req,res)=>{

    let update = req.body;
    let options = {multi :true};
    console.log(update)
    moviesModel.update({movieId : req.body.movieId}, update, options).exec((err,result)=>{
        if(err){
            res.send(err);
        }else if (result == undefined || result == null || result == ''){
            res.send('No document found');
        }else{
            res.send(result);
        }
    })

}

let deleteMovies = (req,res)=>{

   
}

let getMovies = (req,res)=>{

    moviesModel.find()
                            .select('-_v -_id')
                            .lean()
                            .exec((err,result)=>{
                                if(err){
                                    res.send('Issue with database')
                                }else{
                                    if(result== undefined || result == null || result == ''){
                                        res.send ('No movies found');
                                    }else{
                                        res.send(result);
                                    }
                                }
                                
                            })
}

module.exports={
    addMovies :addMovies, 
    updatemovies: updateMovies,
    deleteMovies:deleteMovies,
    getMovies:getMovies,
 }


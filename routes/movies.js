const express = require('express');
const movies = require('../controlers/moviesController');
const config = require('../config/appConfig');

const baseUrl = config.apiVersion;

const subUrl = '/movies';

let setRouter = (app)=>{

    app.post( baseUrl + subUrl + '/addmovies', movies.addMovies);
    app.post( baseUrl + subUrl + '/deletemovies', movies.deleteMovies);
    app.put( baseUrl + subUrl + '/updatemovies',movies.updatemovies);
    app.get(baseUrl + subUrl + '/getmovies',movies.getMovies);
}

module.exports= {
        setRouter : setRouter,
}
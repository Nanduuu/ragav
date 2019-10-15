const express = require('express');
const slideshowdata = require("../controlers/slideshowdata");
const appConfig = require("../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}slideshowdata`;

    // defining routes.


    // params: firstName, lastName, email, mobileNumber, password
    app.get(`${baseUrl}`, slideshowdata.getData);



}

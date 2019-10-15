const express = require('express');
const login = require('../controlers/login');

let setRouter = (app)=>{

    app.post('/login', login.do_login);
    app.post('/logout',login.do_logout);
    app.get('/login',login.do_login);
}

module.exports= {
        setRouter : setRouter,
}
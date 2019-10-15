const jwt = require('jsonwebtoken');
const shortid = require('shortid');
const secretKey = 'akiltadepalligudamaccenture';

let generateToken = (data, cb)=>{

    try{
        let claims = {
            jwtid : shortid.generate(),
            iat : Date.now(),
            exp : Math.floor(Date.now() / 1000) + (60 * 60 * 24),
            sub : 'authToken',
            iss : 'manaTadepalligudam',
            data : data,
        }
        let tokenDetails = {
            token : jwt.sign(claims,secretKey),
            tokenSecret : secretKey,
        }
        cb(null,tokenDetails);
    }catch(err){
        console.log(err);
        cb(err, null);
    }
}


let verifyClaim = (token, cb)=>{
    jwt.verify(toekn, secretKey, (err, decoded) => {
       if(err){
            console.log('error while verify token');
            console.log(err);
            cb(err, null);
       } else{
           console.log('user verified');
           console.log(decoded);
           cb(null,decoded);
       }
      })
}

module.exports = {
    generateToken : generateToken,
    verifyClaim : verifyClaim,
}
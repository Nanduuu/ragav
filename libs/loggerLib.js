const logger = require('pino')();
const moment = require('moment');


let captureError = (errorMessage, errorOrigin, errorLevel)=>{
    let currentTime = moment();

    let errorResponse = {
        timeStamp : currentTime,
        errorMessage : errorMessage,
        errorOrigin: errorOrigin,
        errorLevel : errorLevel,

    }

    logger.error(errorResponse);
    return errorResponse;
}// end of captureError

let captureInfo = (message, origin, importance)=>{
    let currentTime = moment();

    let infoResponse = {
        timeStamp : currentTime,
        message : message,
        origin : origin,
        importance : importance,

    }

    logger.info(infoResponse);
    return infoResponse;
}

module.exports = {
    captureError : captureError,
    captureInfo : captureInfo,
}
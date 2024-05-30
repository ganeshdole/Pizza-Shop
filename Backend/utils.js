const cryptoJs = require('crypto-js');

function mySecretKey(){
    return 'l$G`;mI`XQl$=s<'
}


function encrypt(text) {
    return String(cryptoJs.SHA256(text));
};


function createError(error) {   
    return {
        status: "error",
        error: error,
    };
}


function createSuccess(data) {   
    return {
        status: "success", 
        data,
    };
}

function createResult(error, data) {
    if(error) {
        return createError(error);
    }else {
        return createSuccess(data);
    }
}

module.exports = { encrypt , createError, createSuccess, createResult , mySecretKey};
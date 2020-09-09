var exchangeRate = require('../models/currencyExchangeModel')


exports.getExchangeRate = function(data,callback){
    exchangeRate.find({}).then(success=>{
        callback(null,success);
    }).catch(err=>{
        callback(err,null);
    })

}
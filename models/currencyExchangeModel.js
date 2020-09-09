var mongoose = require('mongoose');
var currencyExchangeModel = new mongoose.Schema({
  currency: {
    type: String,
    required: true,
    trim: true
  },
  description:{
    type: String,
    required:true
  },
  AUD: {
    type: String,
    required: true,
  },
  CAD: {
    type: String,
    required: true,
  },
  JPY: {
    type: String,
    required: true,
  }, 
  INR: {
    type: String,
    required: true,
  },
   
});


var exchangeRate = mongoose.model('exchangeRate', currencyExchangeModel);
module.exports = exchangeRate;
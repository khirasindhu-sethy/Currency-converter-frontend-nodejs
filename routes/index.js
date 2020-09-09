var express = require('express');
var router = express.Router();
var currencyService = require('../services/currency')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getExchngeCurrencies', (req,res) =>{
  currencyService.getExchangeRate(req.body, (err,success)=>{
    if(err){
      res.send(err)
    }else{
      res.send(success)
    }
  })
  })

module.exports = router;

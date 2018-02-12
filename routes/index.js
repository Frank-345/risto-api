var express = require ('express');
var orders = require ('risto')
var router = express.Router ();

var firstMiddleware = function(req,res,next){
  if(req.query.token == 'pippo' || req.query.token == 'caio' || req.query.token == 'sempronio'){
    next();
  }else {
    res.status(401).send({message : 'Autentication failed'});
  }
}

router.post('/', firstMiddleware, function(req,res,next){
  res.status(201).json(orders.addOrder(req.body.dishes, req.body.bill, req.query.token));
})

router.get('/name', firstMiddleware, function(req,res,next) {
  res.json(orders.getOrderByToken(req.query.token));
})

module.exports= router;

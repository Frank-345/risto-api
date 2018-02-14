var express = require ('express');
var orders = require ('risto')
var router = express.Router ();
var bodyParser = require ('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(function(req,res,next){
  if(req.query.token == 'admin'){
    next();
  }else {
    res.status(401).send({message : 'Autentication failed'});
  }
})

router.get('/', function(req,res) {

  res.status(200).json(orders.getOrders());

});

router.get('/status', function(req,res,next) {
  if (req.query.status=='new' || req.query.status=='ready' || req.query.status=='closed'){
    res.json(orders.getOrderByStatus(req.query.status));
  } else {
    res.status(400).json({message : 'INVALID STATUS. An order must be new, ready or open'})
  }

});

router.get('/name/:token', function(req,res,next) {
  var index = orders.getOrderByToken(req.params.token);

  if (index===null) {
    res.status(404).json({message : 'Client not found!'});
  }else {
    res.status(200).json(index);
  }
});


router.delete('/:id', function(req,res) {
  var index = orders.deleteOrder(req.params.id);

  if (Number.isInteger(parseInt(req.params.id)) && req.params.id >= 0 && index != null) {
    res.json(index);
  } else {
    res.status(404).json({message : 'INVALID ID'})
  }

});

router.put('/:id', function(req,res) {
  var index = orders.setOrder(req.params.id,req.body.status);

  if (Number.isInteger(parseInt(req.params.id)) && req.params.id >= 0
      && isNaN(req.body.status) && index != null) {
        if (req.body.status=='new' || req.body.status=='ready' || req.body.status=='closed'){
          res.status(201).json(index);
        } else {
          res.status(400).json({message : 'INVALID STATUS. An order must be new, ready or open'});
        }
  }else {
    res.status(404).json({message: 'INVALID ID'});
  }
});

router.put('/reset', function(req,res) {
  res.json(orders.reset());

})

router.get('/profit', function(req,res) {
  res.json(orders.profit());
})

module.exports = router;

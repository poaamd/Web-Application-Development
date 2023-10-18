var express = require('express');
var router = express.Router();
const productsRouter = require('./products');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/products',productsRouter)

module.exports = router;

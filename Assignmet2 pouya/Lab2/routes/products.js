var express = require('express');
var router = express.Router();
var productsConteroller = require('../controllers/productsConteroller')
/* GET users listing. */
router
  .post('/', productsConteroller.save)
  .get('/:id', productsConteroller.find)
  .delete('/:id',productsConteroller.delete)
  .put('/:id',productsConteroller.update)
module.exports = router;

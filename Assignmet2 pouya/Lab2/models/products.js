var mongoose = require('mongoose');

var ProductsSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String
    
});

module.exports = mongoose.model('products',  ProductsSchema)
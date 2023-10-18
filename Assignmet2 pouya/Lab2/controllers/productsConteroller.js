let productsmodel = require('../models/products.js');

module.exports.save = async (req, res) => {
    const products = new productsmodel(req.body);
    let result = await products.save();
    res.json(result)
}

module.exports.find = async (req, res) => {
    let result = await productsmodel.findById(req.params.id)
    res.json(result)
}

module.exports.delete = async (req, res) => {
    let result = await productsmodel.findByIdAndDeleted(req.params.id)
    res.json(result)
}

module.exports.update = async (req, res) => {
    let result = await productsmodel.findByIdAndUpdate(req.params.id,req.body)
    res.json(result)
}
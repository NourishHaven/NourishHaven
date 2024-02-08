const productModel = require('../models/productModel')
const db = require('mongoose')


const getAllProducts = async (req, res) => {
    const products = await db.find({})
    res.status(200).json({
        data: products
    })
}

const getProduct = async (req, res) => {
    const { id } = req.params
    if (!products.findById(id)) {
        return res.status(404).json({
            error: 'Product not found'
        })
    }
    return products.find({ id })

}

module.exports = {getAllProducts, getProduct}
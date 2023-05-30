import express from "express";
import Product from "../models/Product.js";
const productRoutes = express.Router();



const getProducts = async(req, res)=> {
    const products = await Product.find({});
    res.json(products);
}

const getProduct = async(req, res)=> {
    const product = await Product.findById(req.params.id);

    if(product) {
        res.status(200).json(product)
    } else {
        res.status(404).json({message: 'Product not found'});
        throw new Error('Product not found');
    }
}

productRoutes.route('/').get(getProducts);
productRoutes.route('/:id').get(getProduct);




export default productRoutes;
const express = require("express");
const path = require("path");
const productController = require('../controllers/product/product-controller')

const router = express.Router();

router.get('/get-product/all', productController.getProduct);
router.get('/get-product/:pid', productController.getProduct_detail);

exports.router = router;

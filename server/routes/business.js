const express = require("express");
const checkoutController = require('../controllers/business/checkout-controller')
const cartController = require('../controllers/business/cart-controller');
const aunt_middleware = require('../middlewares/aunt-middleware');
router = express.Router();

router.get('/cart/all', cartController.allCart);
//code by Wichai
router.get('/cart',aunt_middleware, cartController.customer_Cart);
router.put('/set/cart/amount', cartController.set_product_amount);
router.put('/create/cart/', cartController.createCart);
router.delete('/delete-cart/one/item/:cid/:pid/:size', cartController.delete_item);

router.get('/address/get/', aunt_middleware, checkoutController.getAdress)
router.post('/address/new/', aunt_middleware, checkoutController.newAddress);
exports.router = router;
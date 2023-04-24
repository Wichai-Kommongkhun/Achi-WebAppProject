const express = require("express");
const cartController = require('../controllers/business/cart-controller');
const aunt_middleware = require('../middlewares/aunt-middleware');
router = express.Router();

router.get('/cart/all', cartController.allCart);
//code by Wichai
router.post('/cart',aunt_middleware, cartController.customer_Cart);
router.put('/set/cart/amount', cartController.set_product_amount);
router.put('/create/cart/', cartController.createCart);
router.delete('/delete-cart/one/item/:cid/:pid/:size', cartController.delete_item);
exports.router = router;
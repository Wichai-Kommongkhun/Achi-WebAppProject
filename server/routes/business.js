const express = require("express");
const jwt = require('jsonwebtoken');
const checkoutController = require('../controllers/business/checkout-controller')
const cartController = require('../controllers/business/cart-controller');
const aunt_middleware = require('../middlewares/aunt-middleware');
const conn = require('../config/config')
const orderController = require('../controllers/business/order-controller');
router = express.Router();

router.get('/cart/all', cartController.allCart);
//code by Wichai
router.get('/cart',aunt_middleware, cartController.customer_Cart);
router.put('/set/cart/amount', cartController.set_product_amount);
router.put('/create/cart/', cartController.createCart);
router.delete('/delete-cart/one/item/:cid/:pid/:size', cartController.delete_item);

router.get('/address/get/', aunt_middleware, checkoutController.getAdress)
router.post('/address/new/', aunt_middleware, checkoutController.newAddress);
router.post('/order/create/', checkoutController.new_order);


router.post('/create/token/payment',aunt_middleware, async (req, res)=>{
    try{
        const tokemPayment = await jwt.sign(req.body.orde_info, 'pay', { expiresIn: 60*15*1});
        res.send({
            payToken: tokemPayment
        })
    }catch(error){
        console.log(error);
    }
});

router.get('/pay' ,async(req, res, next)=>{

    if (!req.query.code){
        res.status(401).send({
            message: "Error do not have token for pay"
        })
    }
    const token = req.query.code;

    try{
        const verifyToken = await jwt.verify(token, 'pay');
        console.log(verifyToken);
        const [address, field] = await conn.query('select * from customer_address where address_number=?',[verifyToken.address_number])
        console.log(address[0]);
        res.status(200).render("payment", {
            address: JSON.stringify(address[0]),
            order_info: JSON.stringify(verifyToken),
            customer_id: JSON.stringify(address[0].customer_id)
        })

    }catch(error){
        console.log(error);
        res.status(401).send({
            message: "This order time out code can not use",
            Error: error
        });
    }
    
});

router.delete('/delete/order/payError/:id', async (req, res)=>{
    const id = req.params.id
    try{
        const del = await conn.query("delete from orders where order_id = ?", [id])
        res.send(del)
    }catch(error){
        console.log(error);
        res.status(401).send(error)
    }
});

router.get('/orders/get/customer' , aunt_middleware,orderController.getOrder);
router.get('/order/get/:oid', aunt_middleware, orderController.getOne_order);

exports.router = router; 
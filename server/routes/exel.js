const express = require("express");
const jwt = require('jsonwebtoken');
const checkoutController = require('../controllers/business/checkout-controller')
const cartController = require('../controllers/business/cart-controller');
const aunt_middleware = require('../middlewares/aunt-middleware');
const conn = require('../config/config')
const orderController = require('../controllers/business/order-controller');
router = express.Router();

//
router.get('/exel' ,async(req, res, next)=>{
    try{
        const [order,fields] = await conn.query("select *, DATE_FORMAT(date_checkout, '%Y-%m-%d') AS date_checkout from orders left outer join customer_address using(address_number)");
        res.status(200).render("export", {
            order: JSON.stringify(order)
        })
    }catch(error){
        console.log(error);
        res.status(401).send({
            message: "This order time out code can not use Please back to Achi-Website!",
        });
    }
    
});



exports.router = router; 
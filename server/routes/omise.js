const express = require("express");

router = express.Router();

const omise = require('omise')({
    'publicKey': 'pkey_test_5vhkwsgaotfpqek2vcg',
    'secretKey': 'skey_test_5vhkwshw7oi15mtsznw'
});


const createCharge = async (token, price)=>{
    const customer = await omise.customers.create({
        card: token
    })
    console.log("CUSID PAY: ", customer.id);
    const charge = await omise.charges.create({
        amount: price,
        currency: 'THB',
        customer: customer.id
    })
    return charge;
};


router.post('/achi/omise/pay', async (req, res, next)=>{
    console.log("Pay Body",req.body);
    try{
        const pay = await createCharge(req.body.token, req.body.price);
        //console.log(pay);
        res.status(200).send(pay);
    }catch(er){
        console.log(er);
        res.status(401).send(er);
    }
})

exports.router = router;
const Business = require('../../models/business/business');
const Product = require('../../models/product/product-model');
const Token = require('../../utilities/token');

//code by Wichai
const allCart = async (req, res, next) =>{
    try{
        const data = await Business.getCart_all();
        console.log(data);
        res.send(data);
    }catch(er){
        console.log(er);
    }
};
module.exports.allCart = allCart;
//code by Wichai
const customer_Cart = async (req, res, next) =>{
    try{
        const cus_ = req.user_info;
        const cart = await Business.getCustomer_cart(cus_.customer_id);
        console.log(cart);
        res.send({status:true, cart:cart})
    }catch(er){
        console.log(er);
    }finally{
        console.log("End process customer_Cart.");
    }
}
module.exports.customer_Cart = customer_Cart;
//code by Wichai
const set_product_amount = async (req, res, next) =>{
    try{
        console.log(req.body);
        await Product.setProductAmount(req.body)
        res.send("set")
    }catch(er){
        console.log(er);
    }
};
module.exports.set_product_amount = set_product_amount;

const delete_item = async(req, res)=>{
    const cart = {
        customer_id: req.params.cid,
        product_id: req.params.pid,
        size: req.params.size
    };
    console.log("cart Delete: ", cart);
    try{
        const delete_ = await Business.deleteCart(cart);
        res.send(delete_)
    }catch(er){
        console.log(er);
    }
};
module.exports.delete_item = delete_item;

const createCart = async (req, res, next) =>{
    const req_token = req.body.token.split('token_login=')[1].trim();
    const deToken = await Token.verifyToken(req_token, 'kmitl');

    const cart = {
        amount: req.body.newCart.amount,
        size: req.body.newCart.size,
        product_id: req.body.newCart.product_id,
        customer_id: deToken.load.customer_id
    };
    try{
        const create = await Business.createCart(cart);
        res.send(create);
    }catch(er){
        console.log(er);
    }
};
module.exports.createCart = createCart;

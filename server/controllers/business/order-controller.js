const conn = require("../../config/config")

const getOrder = async (req, res, next) =>{
    try{
        const user = req.user_info;
        var orders = await conn.query(
            'select *, DATE_FORMAT(date_checkout, "%Y-%m-%d") as date_checkout from orders where customer_id = ? order by order_id desc',
            [user.customer_id]);
        console.log("Order: ",orders[0]);
        res.status(200).send(orders[0]);
    }catch(error){
        console.log(error);
        res.status(401).send({
            message: "Have Error !",
            error: error
        });
    }
};
module.exports.getOrder = getOrder;

const getOne_order = async (req, res, next) =>{
    try{
        const order = await conn.query(
            'select *, DATE_FORMAT(date_checkout, "%Y-%m-%d") as date_checkout, DATE_FORMAT(date_success, "%Y-%m-%d") as date_success  from orders where order_id = ?',
             [Number(req.params.oid)]);
            //  console.log(order[0]);
            // console.log(order[0][0]);
        if (order[0][0].customer_id == req.user_info.customer_id){
            console.log("OK");
            const address = await conn.query('select * from customer_address where address_number = ?', [
                order[0][0].address_number
            ]);
            const cart = await conn.query('select * from product_order left outer join products using(product_id) where order_id = ?',[
                order[0][0].order_id
            ]);
            res.status(200).send({
                order: order[0][0],
                address: address[0][0],
                cart: cart[0]
            });
        }else{
            throw new Error("You can't select order that you're not owner.");
        }
    }catch(error){
        console.log(error);
        res.status(400).send(error);
    }
};
module.exports.getOne_order = getOne_order;
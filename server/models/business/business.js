
const conn = require('../../config/config');

// code by Wichai
const getCart_all = async ()=>{
    try{
        const [data, des] = await conn.query('select * from cart');
        return data;
    }catch(er){
        console.log("Error at getCart_all");
        console.log(er);
    }finally{
        console.log('End query all Cart');
    }
};
module.exports.getCart_all = getCart_all;

const getCustomer_cart = async (customer_id) =>{
    try{
        const [data, des] = await conn.query('select * from cart left outer join products using(product_id) where cart.customer_id = ?',[
            customer_id
        ]);
        return data;
    }catch(er){
        console.log("Error at getCart_customer ");
        console.log(er);
    }
};
module.exports.getCustomer_cart = getCustomer_cart;

const createCart = async (newCart) =>{
    try{
        const [data, des] = await conn.query('select count(customer_id) as "num", amount from cart where customer_id = ? and product_id = ? and size = ?',[
            newCart.customer_id, newCart.product_id, newCart.size
        ]);
        console.log("amount: ",data[0].num, data[0].amount);
        if (data[0].num == 0){
            const trans_ = await conn.getConnection();
            await trans_.beginTransaction();
            try{
                const field = "(customer_id, product_id, amount, size)";
                const create = await trans_.query('insert into cart' + field + 'values(?,?,?,?);',[
                    newCart.customer_id, newCart.product_id, newCart.amount,newCart.size
                ])
                await trans_.commit();
                
            }catch(er){
                console.log("New Cart with new Products ___");
                console.log(er);
                await trans_.rollback();
            }finally{
                console.log("insert new Cart!");
                trans_.release();
            }
        }else{
            const trans_ = await conn.getConnection();
            await trans_.beginTransaction();
            try{
                console.log(data[0].amount+1,newCart.customer_id, newCart.product_id, newCart.size);
                const update = await trans_.query('update cart set amount = ? where customer_id = ? and product_id = ? and size = ?',[
                    data[0].amount+1, newCart.customer_id, newCart.product_id,newCart.size
                ])
                console.log("Update Amount",update);
                await trans_.commit();
                
            }catch(er){
                console.log(er);
                await trans_.rollback();
            }finally{
                console.log("Add Amount in cart");
                trans_.release()
            }
        }
    }catch(er){
        console.log(er);
    }
};
module.exports.createCart = createCart;

const deleteCart = async (cart) =>{
    try{
        //console.log("Cart DELETE: ", cart);
        const del = await conn.query('delete from cart where customer_id = ? and product_id = ? and size = ?',[
            cart.customer_id, cart.product_id, cart.size
        ])
        return del;
    }catch(er){
        console.log("Error at delete cart in item");
        console.log(er);
    }finally{
        console.log("End delete Cart.");
    }
};
module.exports.deleteCart = deleteCart;
const conn = require('../../config/config')


const getProduct = async ()=>{
    try{
        const [data, feild] = await conn.query('select * from products');
        console.log(data);
        return data;
    }catch(er){
        console.log("Error at getProduct.");
        console.log(er);
    }
};
module.exports.getProduct = getProduct;

const get_oneProduct = async (pid) =>{
    try{
        const [data, feild] = await conn.query('select * from products left outer join product_store using(product_id) where product_id = ?',[pid]);
        console.log(data[0]);
        return data;
    }catch(er){
        console.log("Error at getOne_product.");
        console.log(er);
    }
};
module.exports.get_oneProduct = get_oneProduct;

// code = [0,1] 
// 1 = add, 0 = sub if amount = 0 delete row;
const setProductAmount = async (cart)=>{
    const trans_ = await conn.getConnection();
    await trans_.beginTransaction();
    console.log(cart);
    try{
        if(cart.amount >= 1){
            console.log("update");
            const update = await trans_.query('update cart set amount= ? where customer_id=? and product_id=? and size=?',[
                cart.amount,cart.customer_id, cart.product_id, cart.size
            ]);
            
        }else{
            // amount = 0 delete row
            console.log("Delete");
            const del = await trans_.query('delete from cart where customer_id=? and product_id=? and size=?',[
                cart.customer_id, cart.product_id, cart.size
            ]);
            
        }
        await trans_.commit();
    }catch(er){
        console.log("Error at setAmount");
        console.log(er);
        await trans_.rollback()
    }finally{
        console.log("End setAmount");
        await trans_.release()
    }

};
module.exports.setProductAmount = setProductAmount;
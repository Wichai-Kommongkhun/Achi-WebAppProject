const conn = require('../../config/config');

const getCustomer_address =async (cus_id)=>{
    try{
        const [data, filed] = await conn.query('select * from customer_address where customer_id = ?',[
            cus_id
        ])
        return data
    }catch(er){
        console.log("Error at Get customer_address");
        console.log(er);
    }
}
module.exports.getCustomer_address = getCustomer_address;
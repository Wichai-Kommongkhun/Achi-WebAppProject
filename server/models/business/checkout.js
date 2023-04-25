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

const add_address = async (cus_id,new_address)=>{
    console.log(cus_id, new_address);
    var new_address = new_address.address;
    const connect = await conn.getConnection();
    await connect.beginTransaction()

    try{
        const insert_address = await 
        connect.query(
            'insert into customer_address(customer_id, name, phone, address, provices, amphur, tumbon, zib_code) values(?,?,?,?,?,?,?,?)',
            [cus_id, new_address.name, new_address.phone, new_address.address, new_address.provices,
            new_address.amphur, new_address.tumbon, new_address.zib_code]
        )
        await connect.commit()
        return {status: true, insert: insert_address};
    }catch(er){
        await connect.rollback()
        console.log("Error at Get add_address");
        console.log(er);
        return {status: false};
    }finally{
        console.log("End insert new address");
        connect.release()
    }
};
module.exports.add_address = add_address;
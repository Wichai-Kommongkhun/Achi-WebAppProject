const Business = require('../../models/business/business');
const Token = require('../../utilities/token');
const CheckOut = require('../../models/business/checkout')


const getAdress = async (req, res, next)=>{
    try{
        const user = req.user_info.customer_id;
        const address = await CheckOut.getCustomer_address(user)
        res.send(address)
    }catch(er){
        console.log(er);
    }
}

module.exports.getAdress = getAdress;
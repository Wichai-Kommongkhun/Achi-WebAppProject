const User = require('../../models/customer/account')
const Token = require('../../utilities/token');
const crypt = require('../../utilities/bcrypt');

const getAccount = async (req,res,next)=>{
    try{
        const req_token = req.body.token.split('token_login=')[1].trim();
        const playload = await Token.verifyToken(req_token, 'kmitl');
        var data = await User.getUser(playload.load.customer_id);
        console.log('DATA:',data);
        // thank you ! https://stackoverflow.com/questions/74193747/mysql-returns-the-date-in-this-format-yyyy-mm-ddt000000-000z-i-want-it-in-y
        data.date = data.date.toISOString().split('T')[0]; // T00:00:00.000Z OUT!!
        res.send(data);
    }catch(er){
        console.log(er);
    }
}
module.exports.getAccount = getAccount;

const updateAccount = async (req, res, next)=>{
    try{
        // req = request res = response
        const req_token = req.body.token.split('token_login=')[1].trim();
        const playload = await Token.verifyToken(req_token, 'kmitl');
        if (User.check_password(playload.load.customer_id, req.body.info.confirm_password)){
            if (req.body.password === ''){
                console.log("REQ: ", req.body.info);
                const update_ = await User.update_user(playload.load.customer_id, req.body.info);
                console.log("update: ", update_);
            }else{
                const req_body = req.body.info;
                const encodePW = await crypt.enCrypt(req_body.password);
                req_token.password = encodePW;
                console.log("REQ with encode: ", req_body);
                const update_ = await User.update_user(playload.load.customer_id, req_body);
                console.log("update with encode: ", update_);
            }
            res.send({status: true, des:"update complete"})
        }else{
            console.log("Password Wrong!");
            res.send({status: false, des:"update error! .. Password wrong!"})
        }

    }catch(error){
        console.log(error);
        res.send({status: false, des:"update error!"})
    }
};
module.exports.updateAccount = updateAccount;

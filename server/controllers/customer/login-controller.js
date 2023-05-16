const conn = require('../../config/config')
const User = require('../../models/customer/account');
const Crypt = require('../../utilities/bcrypt');
const Token = require('../../utilities/token')
const Joi = require('joi')

const loginValidate = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(8).required()
})

// code by Wichai [Login-Controller]
const login = async (req, res, next) =>{
    const connect = await conn.getConnection();
    await connect.beginTransaction();
    const {username, password} = req.body;
    const {valid, error} = loginValidate.validate(req.body);

    if(error){
        return res.status(402).send({
            status: false,
            error: error
        });
    }
    try{
        console.log(username, password);
        const result = await User.getUser_login(username);
        const user = {
            customer_id:result.customer_id,
            username: result.username
        };
        if (!result){
            console.log("None User");
            res.send({status: false});
        }else{
            const check_pw = await Crypt.deCrypt(password, result.password);
            console.log("verifyPassword: ", check_pw); // return T,F
            if (check_pw == true){
                const token = await Token.createToken(user, 'kmitl'); // สร้าง token ตรงนี้ ถ้า login ผ่าน
                // res.cookie('token', token);
                // res.cookie('token', token);
                res.send({
                    username: user.username, 
                    token: token, 
                    status: true
                });
            }else{
                res.send({status: false});
            }
        }
    }catch(er){
        console.log(er);
    }finally{
        console.log("End process Login__");
    }
}
module.exports.login = login;
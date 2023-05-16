const conn = require('../../config/config')
const User = require('../../models/customer/account');
const Crypt = require('../../utilities/bcrypt');
const Token = require('../../utilities/token')


// code by Wichai [Login-Controller]
const login = async (req, res, next) =>{
    const connect = await conn.getConnection();
    await connect.beginTransaction();
    const {username, password} = req.body;
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
                // res.cookie('token', token)
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
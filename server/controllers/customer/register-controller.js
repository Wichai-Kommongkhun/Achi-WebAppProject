const User = require('../../models/customer/account');
const Crypt = require('../../utilities/bcrypt');

const register = async (req, res, next) =>{
    var hash_pw='';
    await Crypt.enCrypt(req.body.password).then(result =>{
        hash_pw = result;
        // console.log(result);
    }).catch(er =>{
        console.log(er);
    });

    const user = {
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        date: req.body.date,
        email: req.body.email,
        phone: req.body.phone,
        password: hash_pw
    };
    // console.log(user);
    try{
        const register_ = await User.create_User(user);
        res.send(register_)
    }catch(er){
        console.log(er);
        res.send({status:false})
    }

};
module.exports.register = register;
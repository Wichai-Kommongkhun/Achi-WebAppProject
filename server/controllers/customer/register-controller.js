const User = require('../../models/customer/account');
const Crypt = require('../../utilities/bcrypt');
const Joi = require('joi');
const conn = require("../../config/config");

const nameValidate = (value, helpers) =>{
    if ( (value.match(/[0-9]/))) {
        throw new Joi.ValidationError("Password must be harder")
    }
    return value;
}
const genderValidate = (value, helpers) =>{
    if (value === "women" || value === "man"){
        return value
    }else{
        throw new Joi.ValidationError("Gender must be man or woman")
    }
}
const passwordValidator = (value, helpers) => {
    if (value.length < 8) {
        throw new Joi.ValidationError("Password must contain at least 8 characters")
    }
    if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
        throw new Joi.ValidationError("Password must be harder")
    }
    return value;
}

const validateUser = async (value, helpers) =>{
    try{
        const [user, filed] = await conn.query("select username from customers where username = ?",[value]);
        if (user[0] || user[0].length > 0){
            throw new Joi.ValidationError("Username is aleady used.");
        }else{
            console.log("Username not used.");
        }
        return value;
    }catch(error){
        console.log(error);
    }
}

const registerValidate = Joi.object({
    username: Joi.string().max(50).min(4).required(),
    first_name: Joi.string().required().custom(nameValidate),
    last_name: Joi.string().required().custom(nameValidate),
    gender: Joi.string().required().custom(genderValidate),
    date: Joi.date().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required().pattern(/0[0-9]{9}/),
    password: Joi.string().required().custom(passwordValidator),
    confirmPassword: Joi.ref('password'),
    username: Joi.string().required().custom(validateUser)
});

const register = async (req, res, next) =>{
    var hash_pw='';
    const {valid, error, state} = registerValidate.validate(req.body);
    if (error){
        console.log(error);
        return res.status(401).send({
            state: false,
            error: error
        })
    }else{
        console.log(req.body);
    };
    await Crypt.enCrypt(req.body.password).then(result =>{
        hash_pw = result;
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

    console.log(user);
    try{
        const register_ = await User.create_User(user);
        res.send(register_);
    }catch(er){
        console.log(er);
        res.send({status:false});
    }

};
module.exports.register = register;
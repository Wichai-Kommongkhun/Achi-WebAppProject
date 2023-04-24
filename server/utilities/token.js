const jwt = require('jsonwebtoken');

//code by Wichai
const createToken = async (playload, key) =>{
    try{
        const token = await jwt.sign(playload, key, {expiresIn: 60*60*1});
        console.log("Token = ",token);
        return token;
    }catch(er){
        console.log('Create Token');
        console.log(er);
    }finally{
        console.log("End Process CreateToken.")
    }
};
module.exports.createToken = createToken;

const verifyToken = async (token, key)=>{
    try{
        const v_token = await jwt.verify(token, key);
        console.log(v_token);
        return {load: v_token, status: true};
    }catch(er){
        console.log("Token Error or Token timeOut");
        console.log(er);
        return {status:false};
    }finally{
        console.log("End Process VerifyToken");
    }
};
module.exports.verifyToken = verifyToken;
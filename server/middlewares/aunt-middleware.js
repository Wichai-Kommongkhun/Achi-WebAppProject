const Token = require('../utilities/token')

//code by Wichai
module.exports = async (req, res, next)=>{
    try{
        const req_token = req.body.token.split('token_login=')[1].trim();
        console.log(req_token);
        const v_token = await Token.verifyToken(req_token, 'kmitl');
        if (v_token.status == true){
            console.log("Can use Token")
            req.user_info = v_token.load;
            next();
        }else{
            console.log("token Timeout || token Error");
            res.send({status:false, describe:"login TimeOut."})
        }
    }catch(er){
        console.log("Error at aunt-middleware");
        console.log("token Timeout || token Error");
        res.send({status:false, describe:"login TimeOut."})
        console.log(er);
    }
};
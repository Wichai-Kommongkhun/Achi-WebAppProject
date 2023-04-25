const Token = require('../utilities/token')

//code by Wichai
module.exports = async (req, res, next)=>{
    try{
        const authorization = req.headers.authorization
        console.log(authorization);
        if (!authorization) {
            return res.status(401).send('You are not logged in now')
        }
        const v_token = await Token.verifyToken(authorization, 'kmitl');
        if (v_token.status == true){
            console.log("Can use Token")
            console.log("MY PLAYLOAD:", v_token.load);
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
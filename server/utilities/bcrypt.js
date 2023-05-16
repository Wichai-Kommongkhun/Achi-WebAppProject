const bcrypt = require('bcrypt');
//code by Wichai
const enCrypt = async (text)=>{
    try{
        const result = await bcrypt.hash(text, 10);
        return result;
    }catch(er){
        console.log("Error at enCrypt.");
        console.log(er);
    }
};
module.exports.enCrypt = enCrypt;

const deCrypt = async (password, hash_password)=>{
    try{
        const decrypt = await bcrypt.compare(password, hash_password);
        return decrypt;
    }catch(er){
        console.log("Error at de Crypt.");
        console.log(er);
    }
};
module.exports.deCrypt = deCrypt;
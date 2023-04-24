const Product = require('../../models/product/product-model')

const getProduct = async (req,res)=>{
    try{
        const data = await Product.getProduct();
        res.send(data);
    }catch(er){
        console.log(er);
    }finally{
        console.log("END GET PRODUCT.");
    }
}
module.exports.getProduct = getProduct;

const getProduct_detail = async(req, res, next) =>{
    const pid = req.params.pid;
    try{
        const data = await Product.get_oneProduct(pid);
        res.send(data);
    }catch(er){
        console.log(er);
    }finally{
        console.log("END GET PRODUCT.");
    }
};
module.exports.getProduct_detail = getProduct_detail;

const express = require("express");
const path = require("path")
const app = express();
const conn = require('../config/config');
const { log } = require("console");
const orderController = require('../controllers/business/order-controller');
const multer = require('multer');

const upload = multer({dest:'./static/uploads'})
// const allOrder = require("../controllers/employee/allOrder")
// const login = require('../controllers/employee/loginEm');

// app.use(express.urlencoded({ extended: true })) 
router = express.Router();


router.post('/login-em', async (req,res,next) =>{
    try{
        const id = req.body.user.emid;
        const pass = req.body.user.password;
        console.log(id,pass,"check");
        const [row,field] = await conn.query("select * from administrators where admin_id = ? and password = ?",
        [id,pass])
        console.log(row);
        if (row.length == 1){
            // res.setHeader('Set-Cookie', 'token='+row[0].admin_id)
            // res.redirect("http://localhost:8080/emCon")
            res.send({status: true});
            console.log("success");
        }
        else{
            // res.redirect("login-em")
            res.send({status: false});
            console.log("fail");
        }
    }catch(err){
        console.log(err);
    }
});

router.get('/employeeSelect', async (req,res,next) => {
    try{    
        const [row] = await conn.query("select *, DATE_FORMAT(date_checkout, '%Y-%m-%d') AS date_checkout from orders")
        // console.log(row);
        // console.log("asd");
        res.send({order: row})
    }catch(err){

    }
});


router.get('/emCon', async (req,res,next) => {
    try{
        const [row] = await conn.query("select * ,DATE_FORMAT(date_checkout, '%Y-%m-%d') AS date_checkout from orders where parcel_number is null");
        // console.log(row);
        res.send({notag:row})
    }catch(err){    

    }

});

router.put("/emCon", async (req,res,next) => {
    try{
        const tag = req.body.user.tag;
        const id = req.body.user.tag_id;
        console.log(tag);
        console.log(id);

        const [row] = await conn.query("update  orders set parcel_number = ? where order_id = ?",[tag,id])
        console.log(row);
    }catch(err){
        
    }
});

router.get("/emSelecttrue" , async (req,res,next) => {
    try{
        const [row] = await conn.query("select products.product_id,product_name,brand,price,sum(amount) as amount from products join product_store using (product_id) group by product_id")
        // console.log(row);
        // res.send(row)
        // console.log("asd");
        res.send({product:row})
    }catch(err){

    }
});

router.get("/emProde/:pid" , async (req,res,next) => {
    try{
        const id = req.params.pid;
        console.log(id);
        const [row] = await conn.query("select products.product_name,brand,price,size,color,amount,detail from product_store join products using (product_id) where product_id = ?",id)
        res.send({product:row})
        // console.log(row);
    }catch(err){

    }
});

router.get("/emChangePro", async (req,res,next) => {
    try{
        const [row] = await conn.query("select products.product_id,product_name,size,color,amount,price,detail from products join product_store using(product_id)")
        // console.log(row);
        res.send({product:row})
    }catch(err){

    }
});

router.put("/emChangePro", async (req,res,next) => {
    try{
        const id = req.body.id;
        const name = req.body.name;
        const price = req.body.price;
        const detail = req.body.detail;
        const add_id = req.body.add_id;
        const add_size = req.body.add_size;
        const de_id = req.body.de_id;
        const de_size = req.body.de_size
        // console.log(add_id,add_size);
        

        const [row] = await conn.query("update products set product_name = ? ,price = ?,detail=? where product_id =?",
        [name,price,detail,id])
        // console.log(row);

        const [add] = await conn.query("update product_store set amount =amount+1 where product_id=? and size=?",
        [add_id,add_size])


        const [del] = await conn.query("update product_store set amount =amount-1 where product_id=? and size=?",
        [de_id,de_size])


    }catch(err){

    }
});

router.post("/emChangePro" , async (req,res,next) => {
    try{
        
        const id = req.body.id;
        const size = req.body.size;
        const amount = req.body.amount;

        // console.log(req.body.idy);
        const [row] = await conn.query("select size from product_store where size = ?",size);

        if (row.length == 0){
            const [row2] = await conn.query("insert into product_store(product_id,size,amount) values (?,?,?)",[id,size,amount])
            res.send({error:"สำเร็จ"})
        }
        else{
            res.send({error:"ไม่สามารถแก้ไขได้"});
        }
    }catch(err){

    }
});

router.delete("/emChangePro/:id/:size" , async (req,res,next) => {
    try{
        console.log(req.params);
        const id = req.params.id;
        const size = req.params.size;
        console.log(id,size);

        const [row] = await conn.query("delete from product_store where product_id =? and size=?",
        [id,size])
    }catch(err){

    }
});

router.get("/emAddPro" ,async (req,res,next) => {
    try{
        const [row] = await conn.query("select max(product_id)+1 as m_id from products")
        // console.log(row);
        res.send({pro_id_max:row})
    }catch(err){

    }
})



router.post("/emAddPro/upload" ,upload.single('image') ,async (req,res,next) => {
    try{
        console.log(req.file.originalname);
        
    }catch(err){
        console.log(err);
    }
})


router.get("/order-detail/employee/:oid",orderController.getOne_order)

exports.router = router;
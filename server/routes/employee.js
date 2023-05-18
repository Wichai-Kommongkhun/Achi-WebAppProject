const express = require("express");
const path = require("path")
const app = express();
const conn = require('../config/config');

// const allOrder = require("../controllers/employee/allOrder")
// const login = require('../controllers/employee/loginEm');


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

router.post("/emCon", async (req,res,next) => {
    try{
        const tag = req.body.user.tag;
        console.log(tag);
        const [row] = await conn.query("update  orders set parcel_number = ? where id = ?",tag)
    }catch(err){
        
    }

})
exports.router = router;
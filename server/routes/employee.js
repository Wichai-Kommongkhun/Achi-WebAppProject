const express = require("express");
const path = require("path")
const app = express();
const conn = require('../config/config');

const allOrder = require("../controllers/employee/allOrder")
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

router.get('/employeeSelect', allOrder.order);


exports.router = router;
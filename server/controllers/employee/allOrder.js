const express = require("express");
const path = require("path")
const app = express();
const conn = require("../../config/config")
router = express.Router();

const order = async (req,res,next) => {
        const [row] = await conn.query("select * from orders")
        res.send({status: row});
}
module.exports.order = order;
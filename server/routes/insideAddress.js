const express = require("express");
const amphur = require('../models/address/thai_amphures.json')
const provice = require('../models/address/thai_provinces.json')
const tumbon = require('../models/address/thai_tambons.json')

const router = express.Router();

router.get('/address/api/amphur', async (req, res)=>{
    res.send(amphur);
})

router.get('/address/api/provice', async (req, res)=>{
    res.send(provice);
})


router.get('/address/api/tumbon', async (req, res)=>{
    res.send(tumbon);
})


exports.router = router;
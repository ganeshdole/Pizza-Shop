const express = require('express');
const db = require('../db');
const utils = require("../utils")

const router = express.Router();


router.get("/", async (req , res)=>{
    try{
        const statement = "SELECT id, name, description, price, image FROM pizza";
        const [result] = await db.execute(statement);
        res.status(200).send(result);
    }catch(error){
        res.status(500).send(utils.createError(error));
    }
})

module.exports = router;
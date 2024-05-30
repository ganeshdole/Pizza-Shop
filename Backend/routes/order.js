const express = require('express');
const db = require("../db");
const { createSuccess, createError } = require('../utils');
const router = express.Router();


router.get('/', async (req, res)=>{
    try{
        const statement = 'select id, totalAmount, created_at from ordermaster where userId =?';
        const [result] =  await db.execute(statement, [req.data.id]);
        res.status(200).send(createSuccess(result));
    }
    catch(error){
        req.send(createError(error));
    }
})

router.get('/details/:id', async( req, res) => {
    try{
        const statement = 'select pizzaId,  quantity, totalAmount, created_at from orderdetail where orderId = ?';

        const [result] = await db.execute(statement, [id]);
        res.send(createSuccess(result));
    }
    catch(error)
    {
        res.send(createError(error));
    }
})
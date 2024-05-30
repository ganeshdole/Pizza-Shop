const express = require('express');
const db = require("../db");
const { createSuccess, createError } = require('../utils');
const { mode } = require('crypto-js');
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
        const {id} = req.params;
        const statement = 'select pizzaId,  quantity, totalAmount, created_at from orderdetail where orderId = ?';
        console.log("Helllo")
        const [result] = await db.execute(statement, [id]);
        res.send(createSuccess(result));
    }
    catch(error)
    {
        res.send(createError(error));
    }
})


router.post('/', async ( req, res)=>{
    const {items, totalAmount} = req.body;

    try{
        const statementOrder = 'insert into ordermaster(userId , totalAmount) values(?,? )'

        const order = await db.execute(statementOrder, [req.data.id, totalAmount]);
        const orderId = order[0].insertId;
        console.log(orderId)

        for (const item of items)
        {
            const statementdetail = `insert into orderdetail(orderId, pizzaId, quantity, totalAmount)
            values(?, ? , ? , ?)`

            const result = await db.execute(statementdetail, [
                orderId,
                item['pizzaId'],
                item['quantity'],
                item['totalAmount']
            ]);
        };
        res.send(createSuccess('Done'))

    }catch(error)
    {
        res.send(createError(error))
    }
})

module.exports = router;
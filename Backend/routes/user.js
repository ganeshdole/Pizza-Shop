const express = require('express');
const router = express.Router();
const db = require('../db');
const utils = require('../utils');

const mySecretKey = require('../config')

const jwt = require('jsonwebtoken');

router.post("/signup", async (req, res) => {
    try{
        const {firstName, lastName, email, password} = req.body;
        const ecryptedPassword = utils.encrypt(password);
        const statement = `insert into user (firstName, lastName, email, password) values ('${firstName}', '${lastName}', '${email}', '${ecryptedPassword}')`;
        const result = await db.execute(statement)
    
        res.send(utils.createSuccess(result[0]));
    }catch(error){
        res.status(500).send(utils.createError(error));
    }

});

router.post("/signin", async (req, res) => {
    try{
        const {email,password} = req.body;
        const encryptedPassword = utils.encrypt(password);
        const statement= `select * from user where email = '${email}' and password = '${encryptedPassword}'`;

        const  [user] = await db.execute(statement);
        console.log(user);
        if(user.length === 0){
            res.status(401).send(utils.createError('user not found'));
        }
        else
        {
            const {id , email} = user[0];
            const token = jwt.sign({"id": id, "email": email}, mySecretKey);
            res.send(utils.createSuccess({ "token" : token }));
        }
    }catch(error){
        res.status(500).send(utils.createError(error));
    } 
});

module.exports = router;
const express = require('express');
const cors = require('cors');
const morgen = require('morgan');
const mySecretKey = require('./config')
const app = express();

const jwt = require('jsonwebtoken')
const { createError } = require('./utils');



const userRouter = require('./routes/user'); 
const pizzaRouter = require('./routes/pizza');
const orderRouter = require('./routes/order')

app.use(cors());
app.use(morgen('combined'));
app.use(express.json());
app.use(express.static('images'))

app.use((req, res , next)=>{
    console.log(req.url);
    const skipUrls = ['/user/signup', '/user/signin', '/pizza'];
    if (skipUrls.findIndex(item => item == req.url) != -1) {
        next();
    }
    else{
        const token = req.headers['token'];
        if(!token){
            res.send(createError('Token Missing'))
        }else{
            try{
                const   playload = jwt.verify(token, mySecretKey )
                req.data = playload;
                next()
            }catch(error){
                res.send(createError(error))
            }
        }
    }
})
app.use('/user', userRouter);
app.use('/pizza', pizzaRouter);
app.use('/order', orderRouter);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
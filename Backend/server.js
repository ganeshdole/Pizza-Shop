const express = require('express');
const cors = require('cors');
const morgen = require('morgan');

const app = express();
const userRouter = require('./routes/user'); 

app.use(cors());
app.use(morgen('combined'));
app.use(express.json());
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
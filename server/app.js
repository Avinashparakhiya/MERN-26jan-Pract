const express = require('express')
const app = express()
const mongoose=require('mongoose')
const add=require('./routes/User')
app.use(express.json());
const cors = require("cors");
app.use(cors());
// respond with "hello world" when a GET request is made to the homepage
app.use('/api/auth',add)
mongoose.connect('mongodb://localhost:27017/login_registration')
const db=mongoose.connection

db.on('error',(err)=>
{
    console.log(err);
})

db.once('open',()=>
{
    console.log("Data Base Connection Establish");
})



app.listen(3001,console.log("app is running"));
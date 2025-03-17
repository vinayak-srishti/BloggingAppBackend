const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT= 3002
const DB = require('./Database')
app.use(bodyParser.json())
const UserRoute = require('../Router/UserRouter')
app.use('/User',UserRoute)
const BlogRoute =require('../Router/BlogRoute')
app.use('/Blog',BlogRoute)
app.listen(PORT,()=>{
    console.log(`The server is running on ${PORT}`);
})
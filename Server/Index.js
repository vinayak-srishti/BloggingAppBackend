const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const PORT= 3002
const DB = require('./Database')
app.use(bodyParser.json())
const BlogRoute =require('../BlogRoute')
app.use('/Blog',BlogRoute)

app.use(express.static(`${__dirname}/upload`));


app.listen(PORT,()=>{
    console.log(`The server is running on ${PORT}`);
})
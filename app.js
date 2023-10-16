const express = require('express')
const app = express()
const db = require("./config/db")
const PORT = 4001

app.use(express.urlencoded({extended:true}))
app.use(express.json())












app.listen(PORT, ()=>{
    console.log("server running");
})
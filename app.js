const express = require('express')
const app = express()
const db = require("./config/db")
const PORT = 4001
const books = require("./routes/books")

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use("/api/v1", books)








app.listen(PORT, ()=>{
    console.log("server running");
})
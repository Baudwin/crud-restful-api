const express = require('express')
const app = express()
const db = require("./config/db")
const PORT = 10000
const books = require("./routes/books")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/", async(req,res)=>{
    let cmd = `select * from books`
    try {
        let [tables] = await db.query(cmd)
        res.json(tables)
    } catch (error) {
        res.send(error)
    }
})

app.use("/api/v1", books)








app.listen(PORT, ()=>{
    console.log("server running");
})
const { Router } = require('express')
const router = Router()
const db = require("../config/db")

// ADD NEW BOOK 

router.post("/add-book", async (req, res) => {
    try {
        const { book_title, urthor, genre, year_published } = req.body
        let sqlQuery = `INSERT INTO Book(book_title, urthor, genre, year_published, created_on)
        VALUES(?,?,?,?,now())`
        const new_book = [book_title, urthor, genre, year_published]
        await db.query(sqlQuery, new_book)
        res.sendStatus.json({ "Message": "Book added successfully" })

    }
    catch (error) {
        res.json(error.Message)
    }

})

// GET ALL BOOKS
router.get("/books", async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM Book`
       const [books] = await db.query(sqlQuery)
        res.json(books)
    } catch (error) {
res.send(error)
    }
})














module.exports = router
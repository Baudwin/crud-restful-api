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
        res.sendStatus(201)

    }
    catch (error) {
        res.json(error)
    }

})

// GET ALL BOOKS
router.get("/books", async (req, res) => {
    try {
        const sqlQuery = `SELECT * FROM Book`
        const [books] = await db.query(sqlQuery)
        res.json(books)
    } catch (error) {
        res.json(error)
    }
})

// GET SINGLE BOOK BY ID
router.get("/book/:book_id", async (req, res) => {
    const book_id = req.params.book_id
    try {
        const sqlQuery = `SELECT * FROM Book WHERE bookID =? `
        const [book] = await db.query(sqlQuery, book_id)
        res.json(book)
    } catch (error) {
        res.json(error)
    }
})

// UPDATE BOOK DATA BY ID
router.put("/update/:book_id", async (req, res) => {

    try {
        const book_id = req.params.book_id
        const { book_title, urthor, genre, year_published } = req.body
        const new_update = [book_title, urthor, genre, year_published, book_id]
        const sqlQuery = `UPDATE Book
        SET book_title = ? , urthor = ? , genre = ? , year_published = ? , updated_on = now()
         WHERE bookID = ? `
        await db.query(sqlQuery, new_update)
        res.sendStatus(200)

    } catch (error) {
        res.json(error.message)
    }
})

// DELETE BOOK BY ID

router.delete("/delete/:book_id", async (req, res) => {
    const book_id = req.params.book_id
    try {
        const sqlQuery = `DELETE FROM Book WHERE bookID =? `
         await db.query(sqlQuery, book_id)
        res.sendStatus(200)
    } catch (error) {
        res.json(error)
    }
})






module.exports = router
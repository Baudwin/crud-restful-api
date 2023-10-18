const express = require("express")
const mysql = require("mysql2")
const dotenv = require("dotenv")
dotenv.config()

const db = mysql.createPool({
    host: "bgygai0whvxy2yjhawgo-mysql.services.clever-cloud.com",
    port: "3306",
    database: "bgygai0whvxy2yjhawgo",
    user: "uwzh8aa1o69il9bv",
    password: "dZR3UvN2oiznaAX8AQmG",

}).promise()



module.exports = db
const mysql = require("mysql2")
require("dotenv").config()

const conn = mysql.createConnection({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    database: process.env.database
})

conn.connect((error) => {
    if (error) throw error;
    console.log("connected !")
})

module.exports = conn
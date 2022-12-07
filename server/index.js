const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const router = require('./router/routes')
require("./db/conn")
const port = 8004;



app.use(express.json())
app.use(cors())
app.use("/assests", express.static("./assests"))
app.use(router)


app.listen(port, () => {
    console.log(`server start at port ${port}`)
})
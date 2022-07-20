const mongoose = require('mongoose')

const signUpTemp = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    usename: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model("mytable", signUpTemp)
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    user: {
        type: Array,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = userSchema
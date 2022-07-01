const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    product: {
        type: Object,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = productSchema
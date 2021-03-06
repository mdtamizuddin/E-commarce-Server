const mongoose = require('mongoose')


const orderSchema = mongoose.Schema({
    product: {
        type: Object,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
        default: "Pending"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = orderSchema
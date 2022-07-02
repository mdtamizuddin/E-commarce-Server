const mongoose = require('mongoose')


const reviewSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = reviewSchema
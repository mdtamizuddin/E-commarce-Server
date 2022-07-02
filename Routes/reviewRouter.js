const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const reviewSchema = require('../Schema/reviewSchema')

const Review = new mongoose.model('Review', reviewSchema)

router.get('/all', (req, res) => {
    Review.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})
router.get('/this/:id', (req, res) => {
    Review.find({ id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    Review.findOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).json(data)
        }
    })
})

router.post('/', (req, res) => {
    const newReview = Review(req.body)
    // console.log(newOrder)
    newReview.save((err, data) => {
        if (err) {
            res.status(500).send({ message: "Server Side Problem" })
        }
        else {
            res.status(200).send({ message: "product Added Success" })
        }
    })
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    Review.deleteOne({ _id: id }, (err) => {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).json({ message: 'Product Deleted Success' })
        }
    })
})


module.exports = router
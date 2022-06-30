const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const orderSchema = require('../Schema/orderSchema')
require('dotenv').config()

const Order = new mongoose.model('Order', orderSchema)

router.get('/', (req, res) => {
    Order.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

router.get('/:email', async (req, res) => {
    const email = req.params.email
    Order.findOne({ email: email }, (err, data) => {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).json(data)
        }
    })
})

router.post('/', (req, res) => {
    const newOrder = Order(req.body)
    console.log(newOrder)
    newOrder.save((err, data) => {
        if (err) {
            res.status(500).send({ message: "Server Side Problem" })
        }
        else {
            res.status(200).send(data)
        }
    })
})

router.delete('/:email', async (req, res) => {
    const email = req.params.email
    Order.deleteOne({ email: email }, (err) => {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).json({ message: 'User Deleted Success' })
        }
    })
})


module.exports = router
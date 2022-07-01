const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const productSchema = require('../Schema/productSchema')

const Product = new mongoose.model('Product', productSchema)

router.get('/', (req, res) => {
    Product.find({}, (err, data) => {
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
    Product.findOne({ _id: id }, (err, data) => {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).json(data)
        }
    })
})

router.post('/', (req, res) => {
    const newProduct = Product(req.body)
    // console.log(newOrder)
    newProduct.save((err, data) => {
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
    Product.deleteOne({ _id: id }, (err) => {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).json({ message: 'Product Deleted Success' })
        }
    })
})


module.exports = router
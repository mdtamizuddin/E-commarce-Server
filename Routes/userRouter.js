const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const userSchema = require('../Schema/userSchema')
require('dotenv').config()

const User = new mongoose.model('User', userSchema)

router.get('/', (req, res) => {
    User.find({}, (err, data) => {
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
    User.findOne({ email: email }, (err, data) => {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).json(data)
        }
    })
})

router.put('/:email', (req, res) => {
    const newUser = User(req.body)
    User.findOne({ email: req.params.email }, (err, data) => {
        if (!data) {
            newUser.save((err, data) => {
                if (err) {
                    res.status(500).send({ message: "Server Side Problem" })
                }
                else {
                    res.status(200).send({ message: "user Added" })
                }
            })
        }
        else {
            res.status(200).json({ message: "User Alrady exist" })
        }
    })


})

router.put('/admin/:email', async (req, res) => {
    const email = req.params.email
    const data = req.body
    User.updateOne({ email: email }, {
        $set: {
            dataName: data.updateDate
        }
    }, (err) => {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).json({ message: "Data was Updated" })
        }
    })
})

router.delete('/:email', async (req, res) => {
    const email = req.params.email
    User.deleteOne({ email: email }, (err) => {
        if (err) {
            res.status(500).json({ error: "Server Side Error" })
        }
        else {
            res.status(200).json({ message: 'User Deleted Success' })
        }
    })
})


module.exports = router
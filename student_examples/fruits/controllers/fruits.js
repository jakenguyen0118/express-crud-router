// import express
const express = require('express')
// instantiate a new instance of express.Router
const router = express.Router()
// import the 'fruits' model
const fruits = require('../models/fruits')

// index - returns all things
router.get('/', (req, res) => {
	res.json({
		status: 200,
		fruits: fruits,
	})
})

// show - returns a single thing
router.get('/:index', (req, res) => {
	res.json({
		status: 200,
		fruit: fruits[req.params.index],
	})
})

// create - create a single thing
// .post is HTTP method used to send data to the server
router.post('/', (req, res) => {
    console.log('POST - req.body', req.body)
    const fruit = req.body
    fruits.push(fruit)
    res.json({
        status: 200,
        msg: 'data received'
    })
})

// delete - remove a single thing
router.delete('/:index', (req, res) => {
    // .splice(starting position, how many)
    // .splice mutates the original array
    fruits.splice(req.params.index, 1)
    res.json({
        status: 200,
        msg: 'item removed'
    })
})

// put - update a single thing
router.put('/:index', (req, res) => {
    fruits[req.params.index] = req.body
    res.json({
        status: 200,
        msg: 'item updated',
        fruit: fruits[req.params.index]
    })
})

// export router
module.exports = router
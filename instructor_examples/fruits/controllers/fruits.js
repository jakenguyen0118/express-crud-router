const express = require('express');
const router = express.Router();
const fruits = require('../models/fruits');

// index
router.get('/', (req, res) => {
    res.send(fruits);
});

//show
router.get('/:id', (req, res) => {
    res.send(fruits[req.params.id]);
});

// // create
// router.post('/', (req, res) => {
//     // get data from the user / client

//     fruits.push();
// });



module.exports = router;

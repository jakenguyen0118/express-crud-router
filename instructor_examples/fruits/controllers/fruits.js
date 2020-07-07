const express = require('express');
const router = express.Router();
const fruits = require('../models/fruits.js')

router.get('/', (req, res) => {
    res.send(fruits);
});

router.get('/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

router.post('/', (req, res) => {
    fruits.push(req.body);
    res.send('posted!');
});

router.delete('/:indexOfFruitsArray', (req, res) => {
    fruits.splice(req.params.indexOfFruitsArray, 1);
    res.send('fruit was deleted');
});

router.put('/:indexOfFruitsArray', (req, res) => { //:indexOfFruitsArray is the index of our fruits array that we want to change
    fruits[req.params.indexOfFruitsArray] = req.body; //in our fruits array, find the index that is specified in the url (:indexOfFruitsArray).  Set that element to the value of req.body (the input data)
    res.send(fruits[req.params.indexOfFruitsArray]);
});


module.exports = router;
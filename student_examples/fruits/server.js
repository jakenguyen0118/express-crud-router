// require('dotenv') imports the library
// .config() will look for a file called .env and load the env variable
require('dotenv').config()
// import express
const express = require('express')
// instantiate a new instance of express
const app = express()
const PORT = process.env.PORT || 3000


const fruits = [
    {
        name:'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name:'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name:'banana',
        color: 'yellow',
        readyToEat: true
    }
]

app.get('/fruits', (req,res) => {
    res.json({
        status: 200,
        fruits: fruits
    })
})

//add show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray])
})

app.listen(PORT, () => {
	console.log(`express listening on port ${PORT}`)
})
// require('dotenv') imports the library
// .config() will look for a file called .env and load the env variable
require('dotenv').config()
// import express
const express = require('express')
// import morgan
const logger = require('morgan')
// import fruits "model"
// const fruits = require('./models/fruits')
// instantiate a new instance of express

const app = express()
const PORT = process.env.PORT || 3000

// example of self-created middleware
// app.use((req, res, next) => {
//     console.log('im joes super duper middleware')
//     req.params.index = 100
//     console.log(req.params.index)
//     next()
// })

app.use(logger('dev'))
// x-www.form-urlencoded
app.use(express.urlencoded({extended:false}))
// accepts raw json
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        status: 200,
        msg: 'hi'
    })
})

const fruitsController = require('./controllers/fruits')
app.use('/fruits', fruitsController)

app.listen(PORT, () => {
	console.log(`express listening on port ${PORT}`)
})
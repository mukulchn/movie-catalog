require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const {database} = require('./database')

const port = process.env.SERVER_PORT | 3000

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/', (req, res, next) => {
    req.userId = 'TODO'
    next()
})

//TODO: Add routes
app.use('/titles', require('./titles'))
console.log(`Going to Listening 1 on port ${port}`)
database.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})
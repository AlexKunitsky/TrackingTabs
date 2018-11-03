const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('./config/config')
// require models as sequlize object
const { sequelize } = require('./models')

// init app as express application
const app = express()
// log aby request in server terminal
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// all backend (routes end-point) routes in routes.js file
require('./routes')(app)

// sequlize aquire object from models/index.js
sequelize.sync()
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })

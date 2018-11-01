const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// init app as express application
const app = express()
// log aby request in server terminal
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// express end-point response to client end-point
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Have fun!`
  })
})

app.listen(process.env.port || 8081)

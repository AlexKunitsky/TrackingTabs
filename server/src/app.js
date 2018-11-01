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

// express end-point used get method
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.port || 8081)

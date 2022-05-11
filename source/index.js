// importing the dependencies
const cors = require('cors')
const app = require('express')()
const helmet = require('helmet')
const morgan = require('morgan')
const apiRoutes = require('./routes')
const { createServer } = require('http')
const bodyParser = require('body-parser')
const { startDatabase } = require('./utils/mongo')
const { port } = require('./../config')

// adding Helmet to enhance your API's security
app.use(helmet())

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json())

// enabling CORS for all requests
app.use(cors())

// adding morgan to log HTTP requests
app.use(morgan('combined'))

// api routes
app.use('/api', apiRoutes)

const server = createServer(app)

startDatabase()
  .then(
    async data => {
      // start the server
      server.listen(port, () => {
        const { address, port } = server.address()
        console.log(`${data} and server is up and running on port ${address}:${port}`)
      })
    },
    error => console.error('Error occured...!', error)
  )

module.exports = server
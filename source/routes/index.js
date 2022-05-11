const routes = require('express').Router()

// routes.use('/authorization', require('./authorization'))
// routes.use('/users', require('./users'))

routes.get('/touch', async (req, res) => {
  res.send({ message: 'Server is up and running' })
})

module.exports = routes
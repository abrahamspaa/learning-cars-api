const router = require('express').Router()
const { token } = require('./controller')

router.post('/token', token)

module.exports = router

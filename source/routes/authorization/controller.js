const { sign } = require('jsonwebtoken')
const { secret } = require('../../../config')
const { validate } = require('../users/service')
const { handlePromise } = require('../../utils/handlePromise')

module.exports = {
  async token (request, respond) {
    const { username, password } = request.body

    if (!(username && password)) {
      return respond
        .status(401)
        .json({
          success: false,
          message: 'Please enter username and password'
        })
    }

    const [validationError, validUser] = await handlePromise(validate(username, password))

    if (validationError || !validUser) {
      return respond
        .status(401)
        .json({
          success: false,
          message: 'Authentication failed! Please check the request'
        })
    } else if (validUser) {
      const token = sign(
        { username },
        secret,
        {
          expiresIn: '24h' // expires in 24 hours
        }
      )
      // return the JWT token for the future API calls
      return respond.json({
        token,
        message: 'Authentication successful!'
      })
    }
  }
}

const model = require('./model')

module.exports = {
  validate: async (username, password) => model.findOne({ username, password })
}

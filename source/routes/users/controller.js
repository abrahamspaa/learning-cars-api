const model = require('./model')
const { handlePromise } = require('../../utils/handlePromise')

module.exports = {
  async create (request, respond) {
    const [error] = await handlePromise(model.create(request.body))

    return error
      ? respond.status(500).json({ error })
      : respond.json({ text: 'Created success' })
  },

  async all (request, respond) {
    const [error, all] = await handlePromise(model.find({}))

    return error
      ? respond.status(500).json({ error })
      : respond.json(all)
  },

  async getOne (request, respond) {
    const [error, one] = await handlePromise(model.findById(request.params.id))

    return error || !one
      ? respond.status(500).json(!one ? { error: 'Not Found' } : { error })
      : respond.json(one)
  },

  async update (request, respond) {
    const update = request.body
    const [error, updateRecord] = await handlePromise(
      model.findByIdAndUpdate(request.params.id, update, { new: true })
    )

    return error
      ? respond.status(500).json({ error })
      : respond.json(updateRecord)
  },

  async remove (request, respond) {
    const [error, remove] = await handlePromise(
      model.findByIdAndDelete({ _id: request.params.id })
    )

    return error
      ? respond.status(500).json({ error })
      : respond.status(200).json(remove)
  }
}

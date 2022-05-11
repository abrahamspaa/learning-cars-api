const { connect } = require('mongoose')

const port = 25028
const username = 'admin'
const databaseName = 'pmj'
const server = 'ds225028.mlab.com'
const password = encodeURIComponent('m1ab@admin')
// const mongoDBURL = `mongodb://${username}:${password}@${server}:${port}/${databaseName}`
const mongoDBURL = 'mongodb://127.0.0.1:27017/cars'
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

module.exports = {
  async startDatabase () {
    if (process.env.NODE_ENV !== 'test') {
			console.log(mongoDBURL)
      try {
        const mongoConnection = await connect(mongoDBURL, mongoOptions)
        return `mongo db connected with db -> ${mongoConnection.connections[0].name}`
      } catch (error) {
        return new Error(error)
      }
    } else {
      const { MongoMemoryServer } = require('mongodb-memory-server')
      const mongoServer = new MongoMemoryServer()
      connect(await mongoServer.getConnectionString(), mongoOptions)
    }
  }
}
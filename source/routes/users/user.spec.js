const expect = require('chai').expect
const request = require('supertest')
const app = require('../../index')
const User = require('./model')

describe('api/users', () => {
  beforeEach(async () => {
    await User.deleteMany({})
  })

  describe('GET /', () => {
    it('should return all users', async () => {
      const users = [
        { name: 'test', username: 'testuser', password: 'password', role: 'admin', type: 'Friends' },
        { name: 'test1', username: 'testuser1', password: 'password', role: 'admin', type: 'US' }
      ]
      await User.insertMany(users)
      const res = await request(app).get('/api/users/all')
      expect(res.status).to.equal(200)
      expect(res.body.length).to.equal(2)
    })
  })
})

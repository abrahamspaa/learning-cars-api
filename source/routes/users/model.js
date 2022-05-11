const { Schema, model } = require('mongoose')

module.exports = model('user', new Schema({
  name: {
    type: String,
    required: [true, 'Please enter name']
  },
  password: {
    type: String,
    required: [true, 'Please enter password']
  },
  username: {
    type: String,
    required: [true, 'Please enter user name']
  },
  role: {
    type: String,
    required: [true, 'Please enter role']
  },
	email: {
		type: String,
		required: [true, 'Please enter email']
	},
  publishedDate: {
    type: Date,
    default: Date.now
  }
}))

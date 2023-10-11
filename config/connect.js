const mongoose = require('mongoose')
const userSchema = require('../models/User')

const conn = mongoose.createConnection(process.env.MONGO_URI);
conn.model('User', userSchema)

module.exports = conn
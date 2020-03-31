const mongoose = require('mongoose')
const questionSchema = require('./question.schema.server')

const questionModelServer = mongoose.model('QuestionModel', questionSchema)

module.exports = questionModelServer
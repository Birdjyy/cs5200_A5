const mongoose = require('mongoose');
const answerSchema = require('./answer.schema.server');

const answerModelServer = mongoose.model('AnswerModel', answerSchema)

module.exports = answerModelServer
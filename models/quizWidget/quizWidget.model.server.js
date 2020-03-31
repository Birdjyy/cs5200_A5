const mongoose = require('mongoose')
const quizWidgetSchema = require('./quizWidget.schema.server')

const quizWidgetModel = mongoose.model('QuizWidgetModel', quizWidgetSchema)

module.exports = quizWidgetModel
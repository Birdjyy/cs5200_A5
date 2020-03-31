const mongoose = require('mongoose')
const questionSchema = require('../question/question.schema.server')

const quizWidgetSchema = mongoose.Schema({
    question: [{
        questionSchema
    }]
}, {collection: 'quizWidget'})

module.exports = quizWidgetSchema
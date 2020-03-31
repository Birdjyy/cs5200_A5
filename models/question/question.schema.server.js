const mongoose = require('mongoose');

const questionSchemaServer = mongoose.Schema({
    _id: Number,
    question: String,
    points: Number,
    questionType: {type: String, enum: ['MULTIPLE_CHOICE', 'TRUE_FALSE']},
    multipleChoice: {
        choices: String,
        correct: Number
    },
    trueFalse: {
        isTrue: Boolean
    }
}, {collection:'questions'})

module.exports = questionSchemaServer
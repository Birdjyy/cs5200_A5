const answerModel = require('../models/answer/answer.model.server')

function createAnswer(answer) {
    return answerModel.create(answer)
}

function answerQuestion(studentId, questionId, answer) {
    answer[student] = studentId;
    answer[question] = questionId;
    return answerModel.create(answer);
}

function deleteAnswer(id) {
    return answerModel.delete({_id: id})
}

const deleteAnswerById = (id) => {
    answerModel.deleteOne({_id: id}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Deleted');
        }
    })
}

function findAllAnswers() {
    return answerModel.find()
}

function findAnswerById(id) {
    return answerModel.findById(id)
}

function findAnswersByStudent(studentId) {
    return answerModel.find({student: studentId})
}

function findAnswersByQuestion(questionId) {
    return answerModel.find({question: questionId})
}

module.exports = {
    createAnswer,
    answerQuestion,
    deleteAnswer,
    findAllAnswers,
    findAnswerById,
    findAnswersByStudent,
    findAnswersByQuestion,
    deleteAnswerById
}
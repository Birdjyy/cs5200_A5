const questionModel = require('../models/question/question.model.server')

function createQuestion(question) {
    return questionModel.create(question)
}

function deleteQuestion(id) {
    return questionModel.delete({_id: id})
}
const deleteQuestionByQuestion = (question) => {
    questionModel.deleteOne({question: question}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Deleted');
        }
    })
}

function findAllQuestions() {
    return questionModel.find()
}

function findQuestionById(id) {
    return questionModel.findById(id)
}

module.exports = {
    createQuestion,
    deleteQuestion,
    findAllQuestions,
    findQuestionById,
    deleteQuestionByQuestion
}
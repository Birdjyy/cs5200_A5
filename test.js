const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cs5200-mongo');

const universityDao = require('./daos/university.dao.server')
const studentDao = require('./daos/student.dao.server')
const questionDao = require('./daos/question.dao.server')
const answerDao = require('./daos/answer.dao.server')
// const testDao = require('./daos/testDao')



// console.log(questionDao.findAllQuestions())
// console.log(answerDao.findAllAnswers())
// console.log(studentDao.findAllStudents())
// console.log(testDao.findAllTests())

const testStudentsInitialCount = () =>{
    studentDao.findAllStudents().then(student => {
        console.log('Student num: ')
        console.log(student.length)
    })
}

const testQuestionsInitialCount = () => {
    questionDao.findAllQuestions().then(questions => {
        console.log('Question num: ')
        console.log(questions.length)
    })
}

const testAnswerInitialCount = () => {
    answerDao.findAllAnswers().then(answers =>{
        console.log('Answer num: ')
        console.log(answers.length)
    })
}

const tsetDeleteAnswer = () => {
    answerDao.deleteAnswerById(890)
    testAnswerInitialCount()

    answerDao.findAnswersByStudent(234)

    .then(ans => {
        console.log('Bob answer num: ')
        console.log(ans.length)
    })


}

const testDeleteQuestion = () => {
    questionDao.deleteQuestionByQuestion('Is the following schema valid?')
    testQuestionsInitialCount()
}

const testDeleteStudent = () => {
    studentDao.deleteStudentByName('Bob')
    testStudentsInitialCount()
}

// if (universityDao.truncateDatabase()){
//     if (universityDao.populateDatabase()){
//         testStudentsInitialCount()
//         testQuestionsInitialCount();
//         testAnswerInitialCount();
//         tsetDeleteAnswer();
//         testDeleteQuestion();
//         testDeleteStudent()
//     }
// }

// universityDao.truncateDatabase()
// universityDao.populateDatabase()
testStudentsInitialCount()
testQuestionsInitialCount();
testAnswerInitialCount();
tsetDeleteAnswer();
testDeleteQuestion();
testDeleteStudent()






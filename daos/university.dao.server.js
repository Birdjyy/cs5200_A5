const mongoose = require('mongoose')
const answerModel = require('../models/answer/answer.model.server')
const questionModel = require('../models/question/question.model.server')
const quizWidgetModel = require('../models/quizWidget/quizWidget.model.server')
const studentModel = require('../models/student/student.model.server')

const studentDao = require('./student.dao.server')
const questionDao = require('./question.dao.server')
const answerDao = require('./answer.dao.server')

function truncateDatabase() {
    answerModel.deleteMany({}, (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('Answer delete!');
        }
    });
    studentModel.deleteMany({}, (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('Student delete!');
        }
    });
    questionModel.deleteMany({}, (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('Question delete!');
        }
    });
    quizWidgetModel.deleteMany({}, (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('QuizWidget delete!');
        }
    });
    return 0
}

function populateDatabase() {
    const Alice = {_id: 123, firstName: 'Alice', lastName: 'Wonderland', username: 'alice', password: 'alice', gradYear: 2020, scholarship: '15000'};
    const Bob = {_id: 234, firstName: 'Bob', lastName: 'Hope', username: 'bob', password: 'bob', gradYear: 2021, scholarship: '12000'};

    studentDao.createStudent(Alice)
    studentDao.createStudent(Bob)

    const q1 = {_id: 321, question: 'Is the following schema valid?', points: 10, questionType: 'TRUE_FALSE', isTrue: false};
    const q2 = {_id: 432, question: 'DAO stands for Dynamic Access Object.', points: 10, questionType: 'TRUE_FALSE', isTrue: false};
    const q3 = {_id: 543, question: 'What does JPA stand for?', points: 10, questionType: 'MULTIPLE_CHOICE', choices: 'Java Persistence API,Java Persisted Application,JavaScript Persistence API,JSON Persistent Associations', correct: 1};
    const q4 = {_id: 654, question: 'What does ORM stand for?', points: 10, questionType: 'MULTIPLE_CHOICE', choices: 'Object Relational Model,Object Relative Markup,Object Reflexive Model,Object Relational Mapping', correct: 4};

    questionDao.createQuestion(q1);
    questionDao.createQuestion(q2);
    questionDao.createQuestion(q3);
    questionDao.createQuestion(q4);

    const a1 = {_id: 123, student: 123, question: 321, trueFalseAnswer: true};
    const a2 = {_id: 234, student: 123, question: 432, trueFalseAnswer: false};
    const a3 = {_id: 345, student: 123, question: 543, multipleChoiceAnswer: 1};
    const a4 = {_id: 456, student: 123, question: 654, multipleChoiceAnswer: 2};
    const a5 = {_id: 567, student: 234, question: 321, trueFalseAnswer: false};
    const a6 = {_id: 678, student: 234, question: 432, trueFalseAnswer: true};
    const a7 = {_id: 789, student: 234, question: 543, multipleChoiceAnswer: 3};
    const a8 = {_id: 890, student: 234, question: 654, multipleChoiceAnswer: 4};

    answerDao.createAnswer(a1);
    answerDao.createAnswer(a2);
    answerDao.createAnswer(a3);
    answerDao.createAnswer(a4);
    answerDao.createAnswer(a5);
    answerDao.createAnswer(a6);
    answerDao.createAnswer(a7);
    answerDao.createAnswer(a8);

    return 0
}

module.exports = {
    truncateDatabase,
    populateDatabase
}
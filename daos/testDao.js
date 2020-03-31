const testModel = require('../models/testModel')

function createTest(test) {
    return testModel.create(test)
}

function findAllTests() {
    return testModel.find()
}

function findTestById(testId) {
    return testModel.find({_id: testId})
}

module.exports = {
    createTest,
    findAllTests,
    findTestById
}
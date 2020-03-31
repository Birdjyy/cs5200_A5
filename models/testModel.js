const mongoose = require('mongoose');
const testSchema = require('./testSchema')

const testModel = mongoose.model("TestModel", testSchema);

module.exports = testModel
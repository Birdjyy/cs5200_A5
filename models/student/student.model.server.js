const mongoose = require('mongoose')
const studentSchema = require('./student.schema.server')

const studentModelServer = mongoose.model('StudentModel', studentSchema)

module.exports = studentModelServer
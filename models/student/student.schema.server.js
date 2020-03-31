const mongoose = require('mongoose');

const studentSchemaServer = mongoose.Schema({
    _id: Number,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    gradYear: Number,
    scholarship: String
}, {collection: 'students'})

module.exports = studentSchemaServer
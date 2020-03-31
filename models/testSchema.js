const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    name: String
}, {collection: 'test'});

module.exports = testSchema
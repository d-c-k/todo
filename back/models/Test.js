const mongoose = require('mongoose');
const TestSchema = new mongoose.Schema({
    name: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;

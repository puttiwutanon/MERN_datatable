const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const StudentsSchema = new Schema({
    name: String,
    age: Number,
    grade: Number,
    class: Number,
    height: Number,
    weight: Number,
})

const StudentsModel = mongoose.model('Students', StudentsSchema);
module.exports = StudentsModel
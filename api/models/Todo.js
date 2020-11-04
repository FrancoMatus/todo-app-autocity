const mongoose = require('mongoose');
const {Schema} = mongoose;

const ToDoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        default: 'todo'
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('ToDo', ToDoSchema)
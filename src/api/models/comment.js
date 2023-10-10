const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({

    name: {
        type: String,
        default: 'Гость'
    },
    topic: String,

    likes: Number,

    Dislikes: Number,

    text: String,

    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment

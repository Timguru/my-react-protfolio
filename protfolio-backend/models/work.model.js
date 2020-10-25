const mongoose = require('mongoose')

const workSchema = mongoose.Schema({
    company : String,
    role : String,
    description : String,
    location : String,
    from : String,
    to : String
})

module.exports = mongoose.model('work', workSchema)
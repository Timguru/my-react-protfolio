const mongoose = require('mongoose')

const detailSchema = mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    imgUrl : String,
    description : String,
    age : Number,
    country : String,
    city : String,
    social : [{
        youtube : String,
        facebook : String,
        twitter : String,
        instagram : String,
        whatsapp : String,
        github : String
    }]

})

module.exports = mongoose.model('details', detailSchema);
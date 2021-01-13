const mongoose = require('mongoose')
const url = "http://mongodb://localhost:27017/protfolio"

mongoose.connect(url, {useCreateIndex:true, useUnifiedTopology:true, useNewUrlParser:true}, (err)=>{
    if(err) {
        console.log(err)
    }else {
        console.log("Database connected successfully")
    }
})

mongoose.Promise = global.Promise

module.exports = mongoose


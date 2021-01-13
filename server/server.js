const express = require('express')
const app = express()
const cors = require('cors')

//config
const port = process.env.PORT || 5739
const db = require('./db/db')

//middleware
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req, res)=>{
    res.send('Hurray!!!!')
})

const detail = require('./routes/details')
const work = require('./routes/work')

app.get('/protfolio/work' , (req, res) =>{
    work.find((err, data) =>{
        if(err) {
            res.status(500).send("Error in db")
        }else {
            res.status(200).send(data)
        }
    })
})

app.post('/protfolio/work' , (req, res) =>{
     const workExperience = req.body

     work.create(workExperience, (err)=>{
         if(err){
             res.status(500).send("err")
         }else {
             res.status(200).send("Created")
         }
        })


})

//app the listening port
app.listen(port, (err)=>{
    if(err) {
        console.log(err)
    }else {
        console.log(`Server started on port ${port}`)
    }
})
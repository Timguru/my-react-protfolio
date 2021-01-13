const express = require('express')
const router = express.Router()

//detail model
const Details = require('../models/details.model')

//routes
router.get('/details', (req,res)=>{
    if(Details.countDocuments === 0) {
        res.send("No documents available")
    }else {
        Details.find((err,data) =>{
            if(err) {
                res.status(500).send(err)
            }else {
                res.status(200).send(data)
            }
        })
    }
})

router.get('/details/:id', (req,res)=>{
    const details = req.body

    Details.create(details, (err)=>{
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(201).send('Created')
        }
    })
})

router.post('/details',(req,res)=>{})

router.put('/details/:id', (req,res)=>{})

router.delete('/details/:id', (req,res)=>{})

module.exports = router
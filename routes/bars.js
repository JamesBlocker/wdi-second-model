const 
    express = require('express'),
    barsRouter = new express.Router(),
    Bar = require('../models/Bar.js'),
    { verifyToken } = require('../serverAuth.js')

barsRouter.get('/', (req, res) => {
    Bar.find({}).populate('user').exec((err, bars) => {
        res.json(bars)
    })
})

barsRouter.use(verifyToken)

barsRouter.post('/', (req, res) => {
    console.log(req.user)
    // new bar created including all fields from form  
    // plus user key of current user
    Bar.create({...req.body, user: req.user}, (err, bar) => {
        res.json({ success: true, message: "bar created 🍻", bar })
    })
})

module.exports = barsRouter
const router = require('express').Router()
const User = require('../models/user')

router.get('/', (req,res) => {
    res.render('index', {titulo: "titulo dinamico"})
})

router.get('/servicios', (req,res) => {
    res.render('servicios', {titulo: 'otro titulo ejs'})
})


module.exports = router
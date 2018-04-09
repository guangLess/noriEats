
const route = require('express').Router()
const {appleRequestTest} = require('./fireStoreService')

route.get('/', (req, res, next) => {
    res.send('hello ori 🧚🏽‍♀️🕴� eats 🍎🍌🥕🥒🥦🍯')
})

route.get('/:name', (req, res, next) => {
    const name = req.params.name
    console.log("name:", name)
    const string =  ' 🧚 == ' + name
    appleRequestTest(name, callback => {
        console.log('--🍎-->', callback)
        res.send(callback)
    })
})

module.exports = route
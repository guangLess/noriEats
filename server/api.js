
const route = require('express').Router()

route.get('/', (req, res, next) => {
    res.send('hello ori 🧚🏽‍♀️🕴🏼 likes to eat 🍎🍌🥕🥒🥦🍯')
})

module.exports = route
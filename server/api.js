
const route = require('express').Router()
const {appleRequestTest} = require('./fireStoreService')

route.get('/', (req, res, next) => {
    /*
    const sessionData = req.session
    sessionData.content = "DOG "
    */
   req.session.name = "apples!"

    console.log("req.session --->", req.session.name)
    res.send('hello ori 🧚 eats 🍎🍌🥕🥒🥦🍯' + "\n name ️🕴 : " + req.session.name)
})

route.get('/:name', (req, res, next) => {
    const name = req.params.name
    // const seesionContent = req.session.content
    //const string =  ' 🧚 == ' + name
    //console.log("name:", name + seesionContent) 
    appleRequestTest(name, callback => {
        //console.log('--🍎-->', callback)
        res.send(callback)
    })
})

module.exports = route

const route = require('express').Router()
const {appleRequestTest} = require('./fireStoreService')

route.get('/', (req, res, next) => {
    /*
    const sessionData = req.session
    sessionData.content = "DOG "
    */
     //req.session.name = "apples!"
    //console.log("req.session --->", req.session.name)
    res.send('hello ori 🧚 eats 🍎🍌🥕🥒🥦🍯' + "\n name ️🕴 : " + req.session.name)
})

route.get('/:name', (req, res, next) => {
    const name = req.params.name
    // const seesionContent = req.session.content
    //const string =  ' 🧚 == ' + name
    console.log("name:", name) 
    appleRequestTest(name, callback => {
        //console.log('--🍎-->')
        res.send(callback)
    })
})

route.use(errorHandler)

function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('the path to find infomation has failed, error', {error: err})
}

module.exports = route

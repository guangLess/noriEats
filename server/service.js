const express = require('express')
const session = require('express-session')
const cookieSession = require('cookie-session')
const {resolve, join} = require('path')
const app = express()
const expireTime = 365 * 24 * 60 * 60 * 1000 // one year 
/*
const sess = {
    secret: 'cookie_secret',
    name: 'cookie_name',
    //store: sessionStore,
    proxy: true,
    resave: true,
    saveUninitialized: true
}//{secret: 'token-key-dog', cookie: { maxAge: expireTime }}


if (app.get('env') === 'production') {
    app.set('trust proxy', 1)
    sess.cookie.secure = true
}

app.use(session({sess}))
*/

app.use(cookieSession({
    name: 'dog session',
    keys: ['123'],
    maxAge: expireTime
}))

module.exports = app
    .use(express.static(resolve(__dirname, '..', 'dist')))
    .use('/api', require('./api'))
    .get('/*', (_, res) => res.sendFile(join(__dirname, 'index.html')))//resolve(__dirname, '..', 'dist', 'index.html')))

if (module === require.main) {
    const port = process.env.PORT || 3001
    app.listen(port, () => console.log('listening on port ', port))
}


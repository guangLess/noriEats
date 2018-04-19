const express = require('express')
const session = require('express-session')
const {resolve, join} = require('path')

const app = express()
const cookie = {secret: 'token-key', cookie: { maxAge: 5000 }}
app.use(session({cookie}))


module.exports = app
    .use(express.static(resolve(__dirname, '..', 'dist')))
    .use('/api', require('./api'))
    .get('/*', (_, res) => res.sendFile(join(__dirname, 'index.html')))//resolve(__dirname, '..', 'dist', 'index.html')))

if (module === require.main) {
    const port = process.env.PORT || 3001
    app.listen(port, () => console.log('listening on port ', port))
}


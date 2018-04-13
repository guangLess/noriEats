const express = require('express');
const {resolve} = require('path')

const app = express()

module.exports = app
    .use(express.static(resolve(__dirname, '..', 'dist')))
    .use('/api', require('./api'))
    .get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'dist', 'index.html')))

if (module === require.main) {
    const port = 3000
    app.listen(port, () => console.log('listening on port ', port))
}


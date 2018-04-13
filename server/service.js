const express = require('express');
const {resolve, join} = require('path')

const app = express()

module.exports = app
    .use(express.static(resolve(__dirname, '..', 'dist')))
    .use('/api', require('./api'))
    .get('/*', (_, res) => res.sendFile(join(__dirname, 'index.html')))//resolve(__dirname, '..', 'dist', 'index.html')))

if (module === require.main) {
    const port = process.env.PORT || 3001
    app.listen(port, () => console.log('listening on port ', port))
}


const express = require('express')
const routes = require('./routes')

const PORT = 8080 || process.env.PORT
const HOST = '0.0.0.0' || process.env.HOST

const app = express()

// Mounting routes
routes(app)

app.get('/', (req, res) => {
  res.send('Gists API')
})

app.listen(PORT, HOST)

console.log(`App running on http://${HOST}:${PORT}`)

const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./_routes')

const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(router)
router.use((req, res, next) => {
  console.log(req.method, 'Request from:', req.headers.host, '- To:', req.url)

  next()
})
router.get('/ping', (req, res) => {
  console.log('Ping from:', req.headers.host)
  res.status(200).send('Pong')
})

router.use('/', routes)

module.exports = app

const express = require('express')
const app = express()
require('dotenv').config()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.send('Hello world home page')
})

app.get('*', (req, res) => {
  res.send('404 page')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)
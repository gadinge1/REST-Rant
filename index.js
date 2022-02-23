// Modules and Globals
const express = require('express')
const app = express()
require('dotenv').config()

// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  //res.send('Hello world home page')
  res.render('home')
})

app.get('*', (req, res) => {
  //res.send('404 page')
  res.render('error404')
})

// Listen for Connection
app.listen(process.env.PORT)
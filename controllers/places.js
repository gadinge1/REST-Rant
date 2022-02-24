const router = require('express').Router()

// More code here in a moment
// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Tacos',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Mexican',
        pic: '/images/moretacos.jpg'
      }, {
          name: 'P & C Cafe',
          city: 'Phoenix',
          state: 'AZ',
          cuisines: 'Coffee, Bakery, Plants',
          pic: '/images/coffee.jpg'
      }]
    res.render('places/index', { places })
})
// GET /places/new
router.get('/new', (req, res) => {
    res.render('places/new')
})
// POST /places 
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

module.exports = router
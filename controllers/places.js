const router = require('express').Router()
const Def = require('./default')

// More code here in a moment
// GET /places
router.get('/', (req, res) => {
    res.render('places/index')
})

module.exports = router
const Router = require('express')
const router = new Router()
const devicecontroller = require('../controllers/devicecontroller')

router.post('/', devicecontroller.create)
router.get('/', devicecontroller.getAll)
router.get('/id', devicecontroller.getOne)

module.exports = router
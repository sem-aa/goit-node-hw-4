const express = require('express')
const router = express.Router()
const cntrl = require('../../controllers/users')


router.post('/register', cntrl.register)
router.post('/login', cntrl.login)
router.post('/logout', cntrl.logout)

module.exports = router
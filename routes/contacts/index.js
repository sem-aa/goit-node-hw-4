const express = require('express')
const router = express.Router()
const { validCreateContact, validUpdateContact, validationObjectId } = require('./valid-contacts')
const cntrl = require('../../controllers/contacts')
const guard = require('../../helper/guard')

router.get('/', guard, cntrl.getAll)
router.post('/', guard, validCreateContact, cntrl.createContact)

router.get('/:contactId', guard, validationObjectId, cntrl.getById)
router.delete('/:contactId', guard, cntrl.deleteContact)
router.patch('/:contactId', guard, validUpdateContact, cntrl.updContact)
router.patch('/:contactId/favorite', guard, cntrl.updStatus)
router.put('/:contactId', guard ,validUpdateContact, cntrl.updContactPut)

module.exports = router

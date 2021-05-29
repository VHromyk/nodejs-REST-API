const express = require('express')
const router = express.Router()
const { getAll, getById, add, remove, update } = require('../../../controllers/contacts')
const { validateCreateContact, validateUpdateContact } = require('./validation')
const guard = require('../../../helpers/guard')


router.get('/', guard, getAll)

router.get('/:contactId', guard, getById)

router.post('/', guard, validateCreateContact, add)

router.delete('/:contactId', guard, remove)

router.patch('/:contactId', guard, validateUpdateContact, update)


// router.patch('/:contactId/favorite', validateUpdateContact, async (req, res, next) => {
//    try {
//      if (!req.body) {
//        return res.status(400).json({ status: 'error', code: 400, message: 'missing field favorite' })
//      }
//      const contact = await updateStatusContact(req.params.contactId, req.body);
//     if (contact) {
//       return res.status(200).json({ status: 'success', code: 200, data: { contact } })
//     } return res.status(404).json({ status: 'error', code: 404, message: 'Not Found!' })
//   }
//   catch (error) {
//     next(error);
//   }
// })



module.exports = router

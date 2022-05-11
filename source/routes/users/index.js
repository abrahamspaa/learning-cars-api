const router = require('express').Router()
const {
  all,
  getOne,
  create,
  update,
  remove
} = require('./controller')

router.get('/', all)
router.post('/', create)
router.get('/:id', getOne)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router

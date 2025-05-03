const express = require('express')
const router = express.Router()
const {login} = require('../controllers/usersControllers')

router.post('/login', login)
router.get('/', getUsers)
router.post('/', createUsers)
router.put('/:id', updateUsers)
router.delete('/:id', deleteUsers)

module.exports = router
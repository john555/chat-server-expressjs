const express = require('express');

const usersController = require('../controllers/UsersController');
const router = express.Router();

// endpoint /users
router.get('/', usersController.getUsers);

router.post('/', usersController.createUser);

module.exports = router;

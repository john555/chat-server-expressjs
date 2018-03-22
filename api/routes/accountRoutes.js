const express = require('express');

const accountController = require('../controllers/accountController');
const router = express.Router();

// endpoint /account
router.post('/login', accountController.login);

router.post('/logout', accountController.logout);

module.exports = router;

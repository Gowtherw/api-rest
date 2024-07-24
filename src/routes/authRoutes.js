const express = require('express');
const router = express.Router();
const { logoutUser } = require('../controllers/authController');

router.post('/logout', logoutUser);

module.exports = router;

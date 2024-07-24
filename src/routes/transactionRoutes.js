const express = require('express');
const { getTransactions } = require('../controllers/transactionController');
const { validateJWT } = require('../middleware/auth');
const router = express.Router();

// Ruta para obtener transacciones
router.get('/transactions', validateJWT, getTransactions);

module.exports = router;

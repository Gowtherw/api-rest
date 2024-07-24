const express = require('express');
const { getNearbyRestaurants } = require('../controllers/restaurantController');
const { validateJWT } = require('../middleware/auth');
const router = express.Router();

// Ruta para obtener restaurantes cercanos
router.get('/restaurants', validateJWT, getNearbyRestaurants);

module.exports = router;

const express = require('express');
const { createUser, getUsers, loginUser } = require('../controllers/userController');
const { validateJWT } = require('../middleware/auth');
const { body } = require('express-validator');
const { validateFields } = require('../middleware/validateFields');

const router = express.Router();

// Ruta para crear un nuevo usuario
router.post(
    '/users',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Please include a valid email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        validateFields
    ],
    createUser
);

// Ruta para obtener todos los usuarios
router.get('/users', validateJWT, getUsers);

// Ruta para iniciar sesión
router.post(
    '/users/login',
    [
        body('email').isEmail().withMessage('Please include a valid email'),
        body('password').notEmpty().withMessage('Password is required'),
        validateFields
    ],
    loginUser
);

module.exports = router;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Transaction = require('../models/Transaction');

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const validateEmailExist = await User.findOne({ email });
        if (validateEmailExist) {
            return res.status(400).json({ message: 'User exist' });
        }

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        // Registrar la transacción
        const transaction = new Transaction({
            userId: user._id,
            action: 'signup',
            details: { email }
        });
        console.log('Saving transaction:', transaction); // Log de transacción
        await transaction.save();
        console.log('Transaction saved successfully');

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Iniciar sesión
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign(
            { _id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Registrar la transacción
        const transaction = new Transaction({
            userId: user._id,
            action: 'login',
            details: { email }
        });
        await transaction.save();

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, 'name email'); // El segundo parámetro selecciona solo los campos name y email
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    getUsers,
    loginUser
};

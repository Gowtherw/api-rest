const BlacklistedToken = require('../models/BlacklistedToken');

// Logout del usuario
const logoutUser = async (req, res) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        // Añadir el token a la lista negra
        const blacklistedToken = new BlacklistedToken({ token });
        await blacklistedToken.save();

        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    logoutUser
};

const jwt = require('jsonwebtoken');
const BlacklistedToken = require('../models/BlacklistedToken');

const validateJWT = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({
            message: 'No token provided'
        });
    }

    try {
        // Check if token is blacklisted
        const blacklisted = await BlacklistedToken.findOne({ token });
        if (blacklisted) {
            return res.status(401).json({
                message: 'the token has been invalidated'
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Invalid token'
        });
    }
};

module.exports = {
    validateJWT
};

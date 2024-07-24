const Transaction = require('../models/Transaction');
const User = require('../models/User');

// Obtener transacciones con paginación y nombre del usuario
const getTransactions = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const transactions = await Transaction.find()
            .populate('userId', 'name email')
            .skip(skip)
            .limit(limit);

        // Obtener el número total de transacciones para calcular el número de páginas
        const total = await Transaction.countDocuments();
        const pages = Math.ceil(total / limit);

        res.json({
            transactions,
            page,
            pages,
            total
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva transacción
const createTransaction = async (req, res) => {
    try {
        const { action, details } = req.body;
        const transaction = new Transaction({
            userId: req.uid,
            action,
            details
        });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getTransactions,
    createTransaction
};

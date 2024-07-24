const { Schema, model } = require('mongoose');

const TransactionSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    action: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    details: {
        type: Object,
        required: false
    }
});

module.exports = model('Transaction', TransactionSchema);

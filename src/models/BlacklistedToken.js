const { Schema, model } = require('mongoose');

const BlacklistedTokenSchema = Schema({
    token: {
        type: String,
        required: true
    },
    blacklistedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('BlacklistedToken', BlacklistedTokenSchema);

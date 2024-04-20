const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active' // Default value is set to 'active'
    },
});

module.exports = mongoose.model('Category', categorySchema);

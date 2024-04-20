const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:String,
    category: {
        type: String,
        enum: ['Fruits', 'Milk', 'FastFood'],
        default: 'Milk'
    },
    name: String,
    packsize: String,
    mrp: Number,
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
});

module.exports = mongoose.model('Product', productSchema);
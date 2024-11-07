const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
    },
    address: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String,
    },
    paymentType: {
        type: String,
        enum: ['Online', 'COD'],
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Canceled'],
        default: 'Pending',
    },
    shippingStatus: {
        type: String,
        default: 'Not Shipped',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Order', orderSchema);

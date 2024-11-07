const Order = require('../models/Order');
const User = require('../models/User');
const { sendEmail } = require('../utils/mailer');
const { orderConfirmationTemplate } = require('../utils/emailTemplates');

// Order creation endpoint
const createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();

        const customer = await User.findById(order.customerId);
        sendEmail(customer.email, 'Order Confirmation', orderConfirmationTemplate(order));

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Error creating order' });
    }
};

// Shipping status update endpoint (Admin-only)
const updateShippingStatus = async (req, res) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ error: 'Unauthorized' });
    }
    
    try {
        const { orderId, shippingStatus } = req.body;
        const order = await Order.findByIdAndUpdate(orderId, { shippingStatus }, { new: true });

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Error updating shipping status' });
    }
};

module.exports = { createOrder, updateShippingStatus };

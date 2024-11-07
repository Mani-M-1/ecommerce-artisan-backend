const express = require('express');
const router = express.Router();
const { createOrder, updateShippingStatus } = require('../controllers/orderController');

router.post('/create', createOrder);
router.put('/update-shipping', updateShippingStatus);

module.exports = router;

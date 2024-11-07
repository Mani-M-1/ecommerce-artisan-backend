const orderConfirmationTemplate = (order) => `
    <h1>Order Confirmation</h1>
    <p>Thank you for your purchase! Here are the details:</p>
    <p>Order ID: ${order._id}</p>
    <p>Total Price: ${order.totalPrice}</p>
    <p>Status: ${order.status}</p>
    <p>Thank you for shopping with us!</p>
`;

const shippingUpdateTemplate = (order) => `
    <h1>Shipping Update</h1>
    <p>Your order is on its way!</p>
    <p>Order ID: ${order._id}</p>
    <p>Shipping Status: ${order.shippingStatus}</p>
    <p>Thank you for shopping with us!</p>
`;

module.exports = { orderConfirmationTemplate, shippingUpdateTemplate };

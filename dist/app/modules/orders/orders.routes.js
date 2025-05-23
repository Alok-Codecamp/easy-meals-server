"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = require("express");
const authValidator_1 = require("../../middleware/authValidator");
const orders_controller_1 = require("./orders.controller");
const router = (0, express_1.Router)();
router.post('/customers/order', (0, authValidator_1.authValidator)('customer'), orders_controller_1.orderController.createOrder);
router.get('/providers/orders', (0, authValidator_1.authValidator)('mealProvider'), orders_controller_1.orderController.getOrders);
router.get('/customers/orders', (0, authValidator_1.authValidator)('customer'), orders_controller_1.orderController.getOrdersPlacedByCustomer);
router.put('/update-order/:orderId', (0, authValidator_1.authValidator)('mealProvider', 'customer'), orders_controller_1.orderController.updateOrder);
exports.orderRoutes = router;

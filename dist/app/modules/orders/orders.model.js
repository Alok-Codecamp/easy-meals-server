"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    MealSelection: {
        type: Number,
        required: true,
    },
    dietaryPreferences: {
        type: String,
        required: true,
    },
    customerID: {
        type: mongoose_1.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "in-progress", "delivered"]
    }
}, { timestamps: true });
exports.OrderModel = (0, mongoose_1.model)('Order', OrderSchema);

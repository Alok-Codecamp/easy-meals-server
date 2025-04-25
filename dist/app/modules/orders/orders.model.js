"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    mealId: {
        type: mongoose_1.Types.ObjectId,
        ref: "Meal",
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default: [],
    },
    ingredients: {
        type: [String],
        default: [],
    },
    category: {
        type: [String],
        default: [],
    },
    customerId: {
        type: mongoose_1.Types.ObjectId,
        ref: "User",
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    portion: {
        type: [String],
        default: [],
    },
    schedule: {
        type: String, // Or Date if you're storing it as a Date object
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "in-progress", "delivered"],
        default: "pending",
    },
}, { timestamps: true });
exports.OrderModel = (0, mongoose_1.model)('Order', OrderSchema);

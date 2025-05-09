import { model, Schema, Types } from "mongoose";
import { IOrders } from "./orders.interface";



const OrderSchema = new Schema<IOrders>({
    mealId: {
        type: Types.ObjectId,
        ref: "Meal",
        required: true,
    },
    quantity: {
        type: String,
        required: true
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
        type: Types.ObjectId,
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
        enum: ["pending", "in-progress", "delivered", "cancled"],
        default: "pending",
    },
}, { timestamps: true })


export const OrderModel = model<IOrders>('Order', OrderSchema)

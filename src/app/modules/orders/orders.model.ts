import { model, Schema } from "mongoose";
import { IOrders } from "./orders.interface";



const OrderSchema = new Schema<IOrders>({
    MealSelection: {
        type: Number,
        required: true,
    },
    dietaryPreferences: {
        type: String,
        required: true,
    },
    customerID: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "in-progress", "delivered"]
    }
}, { timestamps: true })


export const OrderModel = model<IOrders>('Order', OrderSchema)

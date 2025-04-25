import { ObjectId, Types } from "mongoose";


export interface IOrders {
    mealId: ObjectId;
    quantity: string;
    tags: string[];
    ingredients: string[];
    category: string[];
    customerId: ObjectId;
    totalPrice: number;
    portion: string[];
    schedule: string;
    status: "pending" | "in-progress" | "delivered"
}

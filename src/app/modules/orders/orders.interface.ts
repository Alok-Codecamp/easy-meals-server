import { ObjectId } from "mongoose";


export interface IOrders {
    MealSelection: number;
    dietaryPreferences: string;
    customerID: ObjectId;
    status: "pending" | "in-progress" | "delivered"
}
// export interface IOrders {
//     MealSelection: number;
//     dietaryPreferences: string;
//     customerID: ObjectId;
//     status: "pending" | "in-progress" | "delivered"
// }
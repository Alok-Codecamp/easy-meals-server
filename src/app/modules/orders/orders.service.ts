import { Types } from "mongoose";
import { UserModel } from "../user/user.model"
import { IOrders } from "./orders.interface"
import { OrderModel } from "./orders.model"
import { populate } from "dotenv";
import Meals from "../meals/meals.model";





const createOrderIntoDb = async (orderData: IOrders) => {
    console.log(orderData);
    const isUserExist = await UserModel.findById(orderData.customerId);
    if (!isUserExist) {
        throw new Error('user not found!')
    }
    const result = await OrderModel.create(orderData);

    return result;

}


const getOrdersFromDb = async () => {
    const orders = await OrderModel.find().populate({ path: 'mealId', populate: { path: 'providerId' } });
    if (!orders.length) {
        throw new Error('No order found!')
    }

    return orders;

}


const getOrdersPlacedByCustomerFromDb = async (userId: string) => {
    const isUserExist = await UserModel.findById(userId);
    if (!isUserExist) {
        throw new Error('user not found!')
    }

    const orders = await OrderModel.find({ customerId: userId }).populate({ path: 'mealId', populate: { path: 'providerId' } });

    return orders
}

const updateOrderIntoDb = async (updateOrderData: IOrders, orderId: string) => {

    const isOrderExists = await OrderModel.findById(orderId);
    if (!isOrderExists) {
        throw new Error("Order not found!!");
    }

    const isCustomerExists = await UserModel.findById(isOrderExists.customerId);

    if (!isCustomerExists) {
        throw new Error("Customer not found!!");
    }

    const isMealExists = await Meals.findById(isOrderExists.mealId);
    if (!isMealExists) {
        throw new Error("meal not found!!");
    }

    const result = await OrderModel.findByIdAndUpdate(orderId, updateOrderData, { new: true });
    return result;

}



export const orderServices = {
    createOrderIntoDb,
    getOrdersFromDb,
    getOrdersPlacedByCustomerFromDb,
    updateOrderIntoDb
}

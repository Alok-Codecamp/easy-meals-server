import { UserModel } from "../user/user.model"
import { IOrders } from "./orders.interface"
import { OrderModel } from "./orders.model"





const createOrderIntoDb = async (orderData: IOrders) => {
    const isUserExist = await UserModel.findById(orderData?.customerID);
    if (!isUserExist) {
        throw new Error('user not found!')
    }
    const result = await OrderModel.create(orderData);

    return result;

}


const getOrdersFromDb = async () => {
    const orders = await OrderModel.find();
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

    const orders = await OrderModel.find({ customerID: userId })
    if (!orders.length) {
        throw new Error('No order found!')
    }

    return orders
}

const updateOrderIntoDb = async (updateOrderData: IOrders) => {

}



export const orderServices = {
    createOrderIntoDb,
    getOrdersFromDb,
    getOrdersPlacedByCustomerFromDb,
    updateOrderIntoDb
}

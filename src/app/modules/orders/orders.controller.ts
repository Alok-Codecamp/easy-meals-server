import status from "http-status";
import asyncWraper from "../../utils/asyncWraper";
import sendResponse from "../../utils/sendResponse";
import { orderServices } from "./orders.service";
import { Request, Response } from "express";



const createOrder = asyncWraper(async (req, res) => {
    const orderData = req.body;
    const result = await orderServices.createOrderIntoDb(orderData);

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'Your order placed successfully',
        data: result
    })
})


const getOrders = asyncWraper(async (req, res) => {
    const result = await orderServices.getOrdersFromDb();

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'orders retrive successfully',
        data: result
    })
})
const getOrdersPlacedByCustomer = asyncWraper(async (req: Request, res: Response) => {
    const userId = req.user.id;
    const result = await orderServices.getOrdersPlacedByCustomerFromDb(userId);

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'Your order retrive successfully',
        data: result
    })
})

// controller function for update order 
const updateOrder = asyncWraper(async (req, res) => {
    const updateOrderData = req.body;
    const orderID = req.params.orderId;

    const result = await orderServices.updateOrderIntoDb(updateOrderData, orderID)

    sendResponse(res, {
        status: status.OK,
        success: true,
        message: 'order updated  successfully',
        data: result
    })
})

export const orderController = {
    createOrder,
    getOrders,
    getOrdersPlacedByCustomer,
    updateOrder,
}


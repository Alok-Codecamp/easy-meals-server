"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const user_model_1 = require("../user/user.model");
const orders_model_1 = require("./orders.model");
const createOrderIntoDb = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(orderData);
    const isUserExist = yield user_model_1.UserModel.findById(orderData.customerId);
    if (!isUserExist) {
        throw new Error('user not found!');
    }
    const result = yield orders_model_1.OrderModel.create(orderData);
    return result;
});
const getOrdersFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield orders_model_1.OrderModel.find();
    if (!orders.length) {
        throw new Error('No order found!');
    }
    return orders;
});
const getOrdersPlacedByCustomerFromDb = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserExist = yield user_model_1.UserModel.findById(userId);
    if (!isUserExist) {
        throw new Error('user not found!');
    }
    const orders = yield orders_model_1.OrderModel.find({ customerId: userId });
    console.log(orders);
    return orders;
});
const updateOrderIntoDb = (updateOrderData) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.orderServices = {
    createOrderIntoDb,
    getOrdersFromDb,
    getOrdersPlacedByCustomerFromDb,
    updateOrderIntoDb
};

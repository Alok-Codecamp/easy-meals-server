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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const asyncWraper_1 = __importDefault(require("../../utils/asyncWraper"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const orders_service_1 = require("./orders.service");
const createOrder = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    const result = yield orders_service_1.orderServices.createOrderIntoDb(orderData);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Your order placed successfully',
        data: result
    });
}));
const getOrders = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_service_1.orderServices.getOrdersFromDb();
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'orders retrive successfully',
        data: result
    });
}));
const getOrdersPlacedByCustomer = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const result = yield orders_service_1.orderServices.getOrdersPlacedByCustomerFromDb(userId);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'Your order retrive successfully',
        data: result
    });
}));
// controller function for update order 
const updateOrder = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateOrderData = req.body;
    const orderID = req.params.orderId;
    const providerId = req.user;
    const result = yield orders_service_1.orderServices.updateOrderIntoDb(updateOrderData, providerId.id, orderID);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'order updated  successfully',
        data: result
    });
}));
exports.orderController = {
    createOrder,
    getOrders,
    getOrdersPlacedByCustomer,
    updateOrder,
};

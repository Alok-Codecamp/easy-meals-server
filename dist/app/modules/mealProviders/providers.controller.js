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
exports.mealProviderController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const asyncWraper_1 = __importDefault(require("../../utils/asyncWraper"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const providers_service_1 = require("./providers.service");
const createMealProvider = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mealProviderData = req.body;
    const providerId = req.params.providerId;
    const result = yield providers_service_1.mealProviderServices.createMealProviderInToDb(mealProviderData, providerId);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'meal provider created successfully',
        data: result
    });
}));
// define controller function for get  all MealProvider data 
const getMealProviders = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.query);
    const result = yield providers_service_1.mealProviderServices.getMealProvidersFromDb(req.query);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'meal provider trive successfully',
        data: result
    });
}));
const getMealProviderById = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mealProviderId } = req.params;
    const result = yield providers_service_1.mealProviderServices.getMealProviderByIDFromDb(mealProviderId);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'meal provider retrive successfully',
        data: result
    });
}));
const updateMealProvider = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mealProviderData = req.body;
    const providerId = req.params.providerId;
    console.log('from p u', providerId);
    const result = yield providers_service_1.mealProviderServices.updateProviderInToDb(mealProviderData, providerId);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'meal provider updated successfully',
        data: result
    });
}));
exports.mealProviderController = {
    createMealProvider,
    getMealProviders,
    getMealProviderById,
    updateMealProvider
};

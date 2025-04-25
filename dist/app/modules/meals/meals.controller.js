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
exports.mealsController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const asyncWraper_1 = __importDefault(require("../../utils/asyncWraper"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const meals_service_1 = require("./meals.service");
const createMeal = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mealData = req.body;
    const userData = req.user;
    console.log(userData);
    const result = yield meals_service_1.mealServices.createMealsIntoDb(mealData);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'meal created successfully',
        data: result
    });
}));
// define controller function for get  all meal data 
const getAllMeals = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield meals_service_1.mealServices.getAllMealsFromDb(req.query);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'meal rtrive successfully',
        data: result
    });
}));
// defaine controller function for get meal by id 
const getMealById = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mealId } = req.params;
    const result = yield meals_service_1.mealServices.getMealByIdFromDb(mealId);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'meal rtrive successfully',
        data: result
    });
}));
// define controller function for update meal 
const updateMeal = (0, asyncWraper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const mealId = req.params.mealId;
    console.log(req.body);
    const result = yield meals_service_1.mealServices.updateMealIntoBd(req.body, mealId);
    (0, sendResponse_1.default)(res, {
        status: http_status_1.default.OK,
        success: true,
        message: 'meal updated successfully',
        data: result
    });
}));
exports.mealsController = {
    createMeal,
    getAllMeals,
    getMealById,
    updateMeal,
};

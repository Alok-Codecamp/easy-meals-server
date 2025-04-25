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
exports.mealServices = void 0;
const QueryBuilder_1 = __importDefault(require("../../queryBuilder/QueryBuilder"));
const providers_model_1 = __importDefault(require("../mealProviders/providers.model"));
const constants_1 = require("./constants");
const meals_model_1 = __importDefault(require("./meals.model"));
const createMealsIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isMealproviderExists = yield providers_model_1.default.findById(payload.providerId);
    if (!isMealproviderExists) {
        throw new Error('Meal Provider not found !!');
    }
    const result = yield meals_model_1.default.create(payload);
    return result;
});
const getAllMealsFromDb = (search) => __awaiter(void 0, void 0, void 0, function* () {
    const mealsQuery = new QueryBuilder_1.default(meals_model_1.default.find().populate({ path: 'providerId', populate: { path: 'mealProvider' } }), search).search(constants_1.searchAbleFields).filter().sort().fields().paginate();
    const result = yield mealsQuery.modelQuery;
    return result;
});
// define service function find meal by id 
const getMealByIdFromDb = (mealId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield meals_model_1.default.findById(mealId).populate({ path: 'providerId', populate: { path: 'mealProvider' } });
    return result;
});
// define service function for update meal 
const updateMealIntoBd = (payload, mealId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload, mealId);
    const isMealproviderExists = yield providers_model_1.default.findById(payload.providerId);
    if (!isMealproviderExists) {
        throw new Error('Meal Provider not found !!');
    }
    const isMealExists = yield meals_model_1.default.findById(mealId);
    if (!isMealExists) {
        throw new Error('Meal not found !!');
    }
    const result = yield meals_model_1.default.findOneAndUpdate({ _id: mealId }, payload, { new: true });
    return result;
});
exports.mealServices = {
    createMealsIntoDb,
    getAllMealsFromDb,
    getMealByIdFromDb,
    updateMealIntoBd,
};

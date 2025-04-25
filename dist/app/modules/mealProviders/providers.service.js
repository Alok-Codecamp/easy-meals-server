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
exports.mealProviderServices = void 0;
const QueryBuilder_1 = __importDefault(require("../../queryBuilder/QueryBuilder"));
const user_model_1 = require("../user/user.model");
const providers_model_1 = __importDefault(require("./providers.model"));
const createMealProviderInToDb = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('front end id ', id);
    const isUserExists = yield user_model_1.UserModel.findById(id);
    if (!isUserExists) {
        throw new Error('User not found!!');
    }
    const isMealProviderAlreadyExists = yield providers_model_1.default.findOne({ mealProvider: id });
    if (isMealProviderAlreadyExists) {
        throw new Error('Oh! You alredy have a Meal provider profile !! You can create only one profile');
    }
    const result = yield providers_model_1.default.create(payload);
    return result;
});
// define function for get all MealProvider data 
const getMealProvidersFromDb = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const mealQuery = new QueryBuilder_1.default(providers_model_1.default.find(), query).search(["title", "ratings", "mealProvider"]).filter().sort().fields().paginate();
    const result = yield mealQuery.modelQuery;
    return result;
});
const getMealProviderByIDFromDb = (mealProviderId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield providers_model_1.default.find({ mealProvider: mealProviderId });
    if (!result) {
        throw new Error('No Meal provider found!!');
    }
    return result;
});
const updateProviderInToDb = (payload, id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('updateProviderservide', id);
    const isUserExists = yield user_model_1.UserModel.findById(id);
    if (!isUserExists) {
        throw new Error('User not found!!');
    }
    const isMealProviderAlreadyExists = yield providers_model_1.default.findOne({ mealProvider: id });
    if (!isMealProviderAlreadyExists) {
        throw new Error('meal provider not found');
    }
    const result = yield providers_model_1.default.findOneAndUpdate({ mealProvider: id }, payload, { new: true });
    return result;
});
exports.mealProviderServices = {
    createMealProviderInToDb,
    getMealProvidersFromDb,
    getMealProviderByIDFromDb,
    updateProviderInToDb
};

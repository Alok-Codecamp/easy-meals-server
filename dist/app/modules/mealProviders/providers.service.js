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
const providers_model_1 = __importDefault(require("./providers.model"));
const createMealProviderInToDb = (mealProviderData) => __awaiter(void 0, void 0, void 0, function* () {
    const isMealExists = yield providers_model_1.default.findOne({ title: mealProviderData.title });
    if (isMealExists) {
        throw new Error('This Meal already exists in Store!!');
    }
    const result = yield providers_model_1.default.create(mealProviderData);
    return result;
});
// define function for get all MealProvider data 
const getMealProviderFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield providers_model_1.default.find();
    return result;
});
const getMealProviderByIDFromDb = (mealProviderId) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(mealProviderId);
    const result = yield providers_model_1.default.findById(mealProviderId);
    console.log(result);
    if (!result) {
        throw new Error('No Meal provider found!!');
    }
    return result;
});
exports.mealProviderServices = {
    createMealProviderInToDb,
    getMealProviderFromDb,
    getMealProviderByIDFromDb,
};

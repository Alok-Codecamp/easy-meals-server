"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealProviderRoutes = void 0;
const express_1 = require("express");
;
const providers_controller_1 = require("./providers.controller");
const authValidator_1 = require("../../middleware/authValidator");
const requestValidator_1 = __importDefault(require("../../middleware/requestValidator"));
const mealProvider_validation_1 = require("./mealProvider.validation");
const router = (0, express_1.Router)();
router.post('/create-mealProvider', (0, requestValidator_1.default)(mealProvider_validation_1.createMealProviderZodSchema), (0, authValidator_1.authValidator)('mealProvider'), providers_controller_1.mealProviderController.createMealProvider);
// router.get('/all-providers-profile', authValidator('mealProvider'), mealProviderController.getMealProviders)
// router.get('//:mealProviderId', authValidator('mealProvider'), mealProviderController.getMealProviderById)
exports.mealProviderRoutes = router;

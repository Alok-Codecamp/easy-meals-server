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
router.post('/create-mealProvider/:providerId', (0, requestValidator_1.default)(mealProvider_validation_1.createMealProviderZodSchema), (0, authValidator_1.authValidator)('mealProvider'), providers_controller_1.mealProviderController.createMealProvider);
router.get('/all-provider', providers_controller_1.mealProviderController.getMealProviders);
router.get('/my-profile/:mealProviderId', (0, authValidator_1.authValidator)('mealProvider', 'customer'), providers_controller_1.mealProviderController.getMealProviderById);
router.put('/update-profile/:providerId', (0, authValidator_1.authValidator)('mealProvider'), providers_controller_1.mealProviderController.updateMealProvider);
exports.mealProviderRoutes = router;

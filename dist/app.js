"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = require("./app/modules/user/user.routes");
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const auth_routes_1 = require("./app/modules/auth/auth.routes");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const providers_routes_1 = require("./app/modules/mealProviders/providers.routes");
const orders_routes_1 = require("./app/modules/orders/orders.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:3000', credentials: true }));
app.use((0, cookie_parser_1.default)());
app.get('/', (req, res) => {
    res.json('EasyMeals server is live and running smoothly!');
});
app.use('/', user_routes_1.userRoutes);
app.use('/auth', auth_routes_1.authRoutes);
app.use('/', providers_routes_1.mealProviderRoutes);
app.use('/', orders_routes_1.orderRoutes);
app.use(globalErrorHandler_1.default);
exports.default = app;

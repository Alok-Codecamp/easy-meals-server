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
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./app/config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const port = config_1.default.port || 5000;
let server;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(config_1.default.mongodb_uri);
            server = app_1.default.listen(port, () => {
                console.log(`easy-meals server running on port ${port}`);
            });
        }
        catch (err) {
        }
    });
}
main();
process.on('unhandledRejection', (err) => {
    console.log(`unhandledRejection is detected,🤢shutting down...,${err}`);
    if (server) {
        console.log(server);
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
process.on('uncaughtException', () => {
    console.log(`uncaughtException is detected,🤢shutting down...`);
    process.exit(1);
});

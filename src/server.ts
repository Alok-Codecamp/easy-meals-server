import { Server } from "http";
import app from "./app";
import config from "./app/modules/config/config";
import mongoose from "mongoose";

let server: Server;

async function main() {
    try {
        await mongoose.connect(config.mongodb_uri as string)
        server = app.listen(config.port, () => {
            console.log(`easy-meals server running on port ${config.port}`);
        })
    }
    catch (err) {

    }
}

main();

process.on('unhandledRejection', (err) => {
    console.log(`unhandledRejection is detected,🤢shutting down...,${err}`);
    if (server) {
        console.log(server);
        server.close(() => {
            process.exit(1);
        })
    }
    process.exit(1);
})

process.on('uncaughtException', () => {
    console.log(`uncaughtException is detected,🤢shutting down...`);
    process.exit(1)
})
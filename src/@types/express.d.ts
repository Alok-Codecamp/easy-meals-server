import { Request } from "express";

declare module "express" {
    export interface Request {
        user?: {
            id: string,
            contact: string,
            role: string,
        };
    }
}
import * as express from 'express';


declare module "express-serve-static-core" {
    interface Request {
        user?: { email: string, role: string, iat: number, exp: number }
    }
}
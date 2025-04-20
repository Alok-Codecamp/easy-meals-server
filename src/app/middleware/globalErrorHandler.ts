import { NextFunction, Request, Response } from "express";
import config from "../config/config";



const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    console.log(err);
    const statusCode = err.status || 500;
    const message = err.message || 'internal error!!'
    const errorSource = {
        path: err.path || 'no path found!',
        message: err.message || 'no message found!'
    }
    res.status(statusCode).json({
        success: false,
        message: message,
        errorSource,
        main: err,
        stack: config.app_mode === 'development' ? err.stack : null,
    })

}


export default globalErrorHandler;
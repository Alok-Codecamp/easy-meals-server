import { Request, Response } from "express";



type TResponse<T> = {
    status: number;
    success: boolean;
    message: string;
    data: T
}


const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    res.status(data.status).json({
        status: data.status,
        success: data.success,
        message: data.message,
        data: data.data
    })
}


export default sendResponse;

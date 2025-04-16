import { AnyZodObject } from 'zod'
import asyncWraper from '../utils/asyncWraper'



const requestValidator = (zodSchema: AnyZodObject) => {
    return asyncWraper(async (req, res, next) => {
        await zodSchema.parseAsync(req.body);
        next();
    })
}


export default requestValidator;
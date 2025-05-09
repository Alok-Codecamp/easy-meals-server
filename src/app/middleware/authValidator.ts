import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken'
import { TUserRole } from "../modules/user/user.interface"
import config from "../config/config"
import asyncWraper from "../utils/asyncWraper"




export const authValidator = (...requiredRoles: string[]) => {

    return asyncWraper(async (req: Request, res: Response, next: NextFunction) => {


        const token = req.headers.authorization as string

        // check if the token is valied
        if (!token) {
            throw new Error('Unauthorized user!')
        }


        const decoded = jwt.verify(token, config.jwt_access_secret as string) as JwtPayload
        if (!decoded) {
            throw new Error('Your login session expired! please login!')
        }
        console.log('line-27', requiredRoles);
        const { contact, role, id } = decoded;


        if (requiredRoles && !requiredRoles.includes(role)) {

            throw new Error(`OH! You are not ${requiredRoles.join(', ')}`)
        }

        req.user = { role, id, contact }
        next()
    })
}
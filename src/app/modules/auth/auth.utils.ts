import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken'
import config from '../../config/config';

export const createToken = (payload: {}, jwt_secret: string, jwt_expiresIn: string) => {
    const option: SignOptions = {
        expiresIn: jwt_expiresIn as SignOptions['expiresIn']
    }
    return jwt.sign(payload, config.jwt_access_secret as string, option);
}

export const verifyToken = (jwt_token: string, jwt_secret: string) => {
    return jwt.verify(jwt_token, jwt_secret) as JwtPayload;
}
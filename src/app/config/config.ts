import dotenv from 'dotenv';
import path from 'path';

// console.log(process.cwd());

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
    app_mode: process.env.APP_MODE,
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URI,
    salt_rounds: process.env.SALT_ROUNDS,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_access_expiresIn: process.env.JWT_ACCESS_EXPIRESIN,
    jwt_refresh_expiresIn: process.env.JWT_REFRESH_EXPIRESIN,
    google_app_pass: process.env.GOOGLE_APP_PASS,
}
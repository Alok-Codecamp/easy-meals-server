import dotenv from 'dotenv';
import path from 'path';

// console.log(process.cwd());

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
    app_mode: process.env.APP_MODE,
    port: process.env.PORT,
    mongodb_uri: process.env.MONGODB_URI,
}
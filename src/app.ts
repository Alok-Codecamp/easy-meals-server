import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { userRoutes } from './app/modules/user/user.routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import { authRoutes } from './app/modules/auth/auth.routes';
import cookieParser from "cookie-parser";
const app: Application = express();

app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(cookieParser());


app.get('/', (req: Request, res: Response) => {
    res.json('EasyMeals server is live and running smoothly!')
})

app.use('/', userRoutes)
app.use('/auth', authRoutes)





app.use(globalErrorHandler)
export default app;




import express, { Application, Request, Response } from 'express';
import cors from 'cors'
import { userRoutes } from './app/modules/user/user.routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import { authRoutes } from './app/modules/auth/auth.routes';
import cookieParser from "cookie-parser";
import { mealProviderRoutes } from './app/modules/mealProviders/providers.routes';
import { orderRoutes } from './app/modules/orders/orders.routes';
import { mealRoutes } from './app/modules/meals/meals.route';
const app: Application = express();

// vercel link https://easy-meals-silk.vercel.app/
// local Link http://localhost:3000 
app.use(express.json())
app.use(cors({ origin: 'https://easy-meals-silk.vercel.app', credentials: true }))
app.use(cookieParser());


app.get('/', (req: Request, res: Response) => {
    res.json('EasyMeals server is live and running smoothly!')
})

app.use('/users', userRoutes)
app.use('/auth', authRoutes)
app.use('/providers', mealProviderRoutes)
app.use('/meals', mealRoutes)
app.use('/orders', orderRoutes)




app.use(globalErrorHandler)
export default app;



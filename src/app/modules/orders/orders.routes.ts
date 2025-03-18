import { Router } from "express";
import { authValidator } from "../../middleware/authValidator";
import { orderController } from "./orders.controller";



const router = Router();


router.post('/create-order', authValidator('customer'), orderController.createOrder);
router.get('/', authValidator('mealProvider'), orderController.getOrders);
router.get('/:orderId', authValidator('customer', 'mealProvider'), orderController.getOrderById);
router.put('/:orderId', authValidator('mealProvider'), orderController.updateOrder);


export const orderRoutes = router;
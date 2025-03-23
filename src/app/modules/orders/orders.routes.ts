import { Router } from "express";
import { authValidator } from "../../middleware/authValidator";
import { orderController } from "./orders.controller";



const router = Router();


router.post('/customers/order', authValidator('customer'), orderController.createOrder);
router.get('/providers/orders', authValidator('mealProvider'), orderController.getOrders);

router.get('/customers/orders', authValidator('customer'), orderController.getOrdersPlacedByCustomer);

router.put('/providers/response', authValidator('mealProvider'), orderController.updateOrder);


export const orderRoutes = router;
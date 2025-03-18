import { IOrders } from "./orders.interface"





const createOrderIntoDb = async (orderData: IOrders) => {

}


const getOrdersFromDb = async () => {

}


const getOrderByIdFromDb = async (orderId: string) => {

}

const updateOrderIntoDb = async (updateOrderData: IOrders) => {

}



export const orderServices = {
    createOrderIntoDb,
    getOrdersFromDb,
    getOrderByIdFromDb,
    updateOrderIntoDb
}

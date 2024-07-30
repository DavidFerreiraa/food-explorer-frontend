import { IProduct } from "./IProduct"

export interface IOrder {
    id: string,
    totalPrice: string,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
    OrderProducts: [
        {
            id: string,
            productId: string,
            orderId: string,
            quantity: number,
            Product: IProduct
        }
    ]
}
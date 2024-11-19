import { IProduct } from "./IProduct"

export interface IOrderProducts {
    id: string,
    productId: string,
    orderId: string,
    quantity: number,
    Product: IProduct
}
export interface IOrder {
    id: string,
    totalPrice: string,
    ownerId: string,
    createdAt: string,
    updatedAt: string,
    OrderProducts: IOrderProducts[]
}
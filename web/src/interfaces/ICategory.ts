import { IProduct } from "./IProduct"

export interface ICategory {
    id: string,
    name: string,
    Products: [
        {
            Product: IProduct
        }
    ]
}
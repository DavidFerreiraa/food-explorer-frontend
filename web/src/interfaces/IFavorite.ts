import { IProduct } from "./IProduct"

export interface IFavorite {
    id: string,
    userId: string
    Product: IProduct[]
}
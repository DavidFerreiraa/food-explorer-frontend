import { IIngredient } from "./IIngredient";

interface CategoriesInProducts {
    categoryId: string,
    createdAt: string,
    productId: string,
    updatedAt: string
}
export interface IProduct {
    id: string,
    title: string,
    description: string,
    price: string,
    Ingredients: IIngredient[],
    Categories: CategoriesInProducts[],
    imageUrl: string,
    creatorId: string,
    favoritesId: string | null,
    createdAt: string,
    updatedAt: string
}
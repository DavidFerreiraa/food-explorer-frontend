import { IIngredient } from "./IIngredient";

export interface IProduct {
    id: string,
    title: string,
    description: string,
    price: string,
    Ingredients: IIngredient[],
    categoryId: string,
    imageUrl: string,
    creatorId: string,
    favoritesId: string | null,
    createdAt: string,
    updatedAt: string
}
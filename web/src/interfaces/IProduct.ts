export interface IProduct {
    id: string,
    title: string,
    description: string,
    price: string,
    ingredients: string[],
    categoryId: string,
    imageUrl: string,
    creatorId: string,
    favoritesId: string | null,
    createdAt: string,
    updatedAt: string
}
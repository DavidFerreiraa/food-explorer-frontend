import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { IDataError } from "../interfaces/IAppError";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IFavorite } from "../interfaces/IFavorite";

interface IFavoriteProvider {
    children: ReactNode
}

interface FavoritesContextType {
    favorites: IFavorite[] | undefined
    fetchFavorites(search?: string): Promise<IFavorite[] | undefined>
    createFavorite(productId: string): Promise<IFavorite | undefined>
    deleteFavorite(id: string): Promise<IFavorite[] | undefined>
}

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoriteProvider({children}: IFavoriteProvider) {
    const [data, setData] = useState<IFavorite[] | undefined>(undefined);

    async function fetchFavorites(): Promise<IFavorite[] | undefined> {
        return await api.get("/favorites").then((response) => {
            const favorites = response.data;
            setData(favorites)
            return favorites
        }).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
    }

    async function createFavorite(productId: string): Promise<IFavorite | undefined> {
        return await api.post(`/favorites/${productId}`).then((response) => {
            toast.success("Product added to favorites")
            const favorite = response.data;
            fetchFavorites();
            return favorite
        }).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
    }

    async function deleteFavorite(id: string): Promise<IFavorite[] | undefined> {
        await api.delete(`/favorites/${id}`).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
        toast.success("Product removed from favorites")
        return await fetchFavorites();
    }

    return(
        <FavoritesContext.Provider value={{
            favorites: data,
            fetchFavorites,
            createFavorite,
            deleteFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites(): FavoritesContextType {
    const context = useContext<FavoritesContextType | undefined>(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used into a FavoriteProvider");
    }
    return context;
}
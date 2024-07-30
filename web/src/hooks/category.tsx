import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { IDataError } from "../interfaces/IAppError";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { ICategory } from "../interfaces/ICategory";

interface ICategoryProvider {
    children: ReactNode
}

interface CategoryContextType {
    categories: ICategory[] | undefined,
    fetchCategories(): Promise<ICategory | void>
}

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({children}: ICategoryProvider) {
    const [data, setData] = useState<ICategory[] | undefined>(undefined)

    async function fetchCategories(): Promise<ICategory | void> {
        await api.get("/categories").then((response) => {
            const categories = response.data;
            setData(categories);
        }).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
    }

    return(
        <CategoryContext.Provider value={{
            categories: data,
            fetchCategories
        }}>
            {children}
        </CategoryContext.Provider>
    );
}

export function useCategory(): CategoryContextType {
    const context = useContext<CategoryContextType | undefined>(CategoryContext);
    if (!context) {
        throw new Error("useProduct must be used into a ProductProvider");
    }
    return context;
}
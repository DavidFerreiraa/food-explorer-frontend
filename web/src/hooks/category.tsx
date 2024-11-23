import { createContext, ReactNode, useContext } from "react";
import { api } from "../services/api";
import { IDataError } from "../interfaces/IAppError";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { ICategory } from "../interfaces/ICategory";

interface ICategoryProvider {
    children: ReactNode
}

interface CategoryContextType {
    fetchCategories(): Promise<ICategory[] | undefined>
    showCategory(id: string | undefined): Promise<ICategory | undefined>
}

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({children}: ICategoryProvider) {
    async function fetchCategories(): Promise<ICategory[] | undefined> {
        return await api.get("/categories").then((response) => {
            const categories = response.data;
            return categories;
        }).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details ? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error);
        });
    }

    async function showCategory(id: string | undefined): Promise<ICategory | undefined> {

        if (!id) {
            toast.warn("Não foi possível acessar a categoria, volte e tente novamente.");
            return;
        }
        return await api.get(`/categories/${id}`).then((response) => {
            const category = response.data;
            return category;
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
            fetchCategories,
            showCategory
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
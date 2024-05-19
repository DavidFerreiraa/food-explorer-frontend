import { createContext, ReactNode, useContext } from "react";
import { api } from "../services/api";
import { IDataError } from "../interfaces/IAppError";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IProduct } from "../interfaces/IProduct";

interface IProductProvider {
    children: ReactNode
}

interface ICreateProduct {
    product: IProduct
    file: File
}

interface ProductContextType {
    createProduct({product, file}: ICreateProduct): Promise<IProduct | void>
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({children}: IProductProvider) {
    async function createProduct({product, file}: ICreateProduct): Promise<IProduct | void> {
        const fileUploadForm = new FormData();
        fileUploadForm.append("productImage", file);
        fileUploadForm.append("json", JSON.stringify(product));

        let productCreated = undefined

        await api.post("/products", fileUploadForm)
        .then((response) => {
            toast.success("Product created!");
            productCreated = response.data;
        })
        .catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
        
        return productCreated
    }

    return(
        <ProductContext.Provider value={{
            createProduct
        }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProduct(): ProductContextType {
    const context = useContext<ProductContextType | undefined>(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used into a ProductProvider");
    }
    return context;
}
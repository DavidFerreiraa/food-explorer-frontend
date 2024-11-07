import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { IDataError } from "../interfaces/IAppError";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IProduct } from "../interfaces/IProduct";

interface IProductProvider {
    children: ReactNode
}

interface ICreateProduct {
    product: Partial<IProduct>
    file: File
}

interface ProductContextType {
    product: IProduct | undefined
    showProduct(id: string | undefined): Promise<IProduct | void>,
    createProduct({product, file}: ICreateProduct): Promise<IProduct | void>
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({children}: IProductProvider) {
    const [ data, setData ] = useState<IProduct | undefined>();

    async function showProduct(id: string | undefined): Promise<IProduct | void> {

        if (!id) {
            toast.warn("Não foi possível acessar o produto, volte e tente novamente.");
            return;
        }
        await api.get(`/products/${id}`).then((response) => {
            const product = response.data;
            setData(product);
        }).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
    }

    async function createProduct({product, file}: ICreateProduct): Promise<IProduct | void> {
        const fileUploadForm = new FormData();
        fileUploadForm.append("productImage", file);
        fileUploadForm.append("json", JSON.stringify(product));

        let productCreated = undefined

        await api.post("/products", fileUploadForm)
        .then((response) => {
            toast.success("Product created!");
            productCreated = response.data;
            return productCreated;
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
            product: data,
            showProduct,
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
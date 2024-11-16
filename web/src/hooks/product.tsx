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
    products: IProduct[] | undefined,
    showProduct(id: string): Promise<IProduct | undefined>,
    fetchProducts(searchTerm?: string): Promise<IProduct[] | undefined>,
    deleteProduct(id: string): Promise<void>,
    createProduct({product, file}: ICreateProduct): Promise<IProduct | undefined>,
    updateProduct({product, file}: Partial<ICreateProduct>, id: string): Promise<IProduct | undefined>
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({children}: IProductProvider) {
    const [data, setData] = useState<IProduct[] | undefined>(undefined)

    async function fetchProducts(searchTerm?: string): Promise<IProduct[] | undefined> {
        if (searchTerm) {
            return await api.get(`/products?searchTerm=${searchTerm}`).then((response) => {
                const orders = response.data;
                setData(orders)
                return orders
            }).catch((error: AxiosError<IDataError>) => {
                if (error.response) {
                    error.response.data.details? error.response.data.details.map((detail) => {
                        toast.error(detail.message);
                    }) : toast.error(error.response.data.message);
                }
                console.log(error)
            });
        }
        return await api.get(`/products`).then((response) => {
            const product = response.data;
            setData(product)
            return product;
        }).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
    }

    async function showProduct(id: string): Promise<IProduct | undefined> {
        return await api.get(`/products/${id}`).then((response) => {
            const product = response.data;
            return product;
        }).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
    }

    async function deleteProduct(id: string): Promise<void> {
        await api.delete(`/products/${id}`).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
    }

    async function createProduct({product, file}: ICreateProduct): Promise<IProduct | undefined> {
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

    async function updateProduct({product, file}: Partial<ICreateProduct>, id: string): Promise<IProduct | undefined> {
        const fileUploadForm = new FormData();
        if (file) {
            fileUploadForm.append("productImage", file);
        }
        fileUploadForm.append("json", JSON.stringify(product));

        let productUpdated = undefined

        await api.put(`/products/${id}`, fileUploadForm)
        .then((response) => {
            toast.success("Product updated!");
            productUpdated = response.data;
            return productUpdated;
        })
        .catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
        
        return productUpdated
    }

    return(
        <ProductContext.Provider value={{
            products: data,
            showProduct,
            fetchProducts,
            deleteProduct,
            createProduct,
            updateProduct
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
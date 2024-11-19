import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { IDataError } from "../interfaces/IAppError";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IOrder } from "../interfaces/IOrder";

interface IOrderProvider {
    children: ReactNode
}

interface ICreateOrder {
    totalPrice: number,
    quantity: number,
    productId: string
}

interface IOrderCreated {
    id: string,
    totalPrice: string,
    ownerId: string,
    createdAt: string,
    updatedAt: string
}

interface OrderContextType {
    orders: IOrder[] | undefined
    fetchOrders(search?: string): Promise<IOrder[] | undefined>
    createOrder({totalPrice, quantity, productId}: ICreateOrder): Promise<IOrderCreated | void>
    deleteOrder(id: string): Promise<IOrder[] | undefined>
}

export const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({children}: IOrderProvider) {
    const [data, setData] = useState<IOrder[] | undefined>(undefined);

    async function fetchOrders(): Promise<IOrder[] | undefined> {
        return await api.get("/orders").then((response) => {
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

    async function createOrder({totalPrice, quantity, productId}: ICreateOrder): Promise<IOrderCreated | void> {
        await api.post(`/orders/${productId}`, {totalPrice, quantity})
        .then((response) => {
            toast.success("Order created!");
            const orderCreated = response.data;
            fetchOrders();
            return orderCreated;
        })
        .catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
    }

    async function deleteOrder(id: string): Promise<IOrder[] | undefined> {
        await api.delete(`/orders/${id}`).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
        return await fetchOrders();
    }

    return(
        <OrderContext.Provider value={{
            orders: data,
            fetchOrders,
            createOrder,
            deleteOrder
        }}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrder(): OrderContextType {
    const context = useContext<OrderContextType | undefined>(OrderContext);
    if (!context) {
        throw new Error("useOrder must be used into a OrderProvider");
    }
    return context;
}
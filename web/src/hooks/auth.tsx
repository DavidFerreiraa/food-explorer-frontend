import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IUser } from "../interfaces/IUser";
import { IDataError } from "../interfaces/IAppError";
import Cookies from 'js-cookie';
import { toast } from "react-toastify";
import { AxiosError } from "axios";
interface IAuthProvider {
    children: ReactNode
}

interface AuthContextType {
    user: IUser | undefined,
    signIn(email: string, password: string): Promise<void>,
    signUp(name: string, email: string, password: string): Promise<void>,
    signOut(): void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: IAuthProvider) {
    const [data, setData] = useState<IUser|undefined>(undefined);

    async function signIn(email: string, password: string): Promise<void> {
        api.post<IUser>("/sessions", { email, password }).then((response) => {
            const user = response.data;
            
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            Cookies.set("token_expiration", "Token Expiration", {expires: 10.41});

            setData(user);
            return toast.success(`Olá, ${user.name}`);
        }).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
    }

    async function signUp(name: string, email: string, password: string): Promise<void> {
        api.post<IUser>("/users", { name, email, password }).then(() => {
            window.location.href = "/"
        }).catch((error: AxiosError<IDataError>) => {
            if (error.response) {
                error.response.data.details? error.response.data.details.map((detail) => {
                    toast.error(detail.message);
                }) : toast.error(error.response.data.message);
            }
            console.log(error)
        });
    }

    function signOut() {
        localStorage.removeItem("@foodexplorer:user");
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        
        setData(undefined);
        return toast.success("Até a próxima.")
    }

    useEffect(() => {
        const user = localStorage.getItem("@foodexplorer:user");

        if (user) {
            setData(JSON.parse(user));
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            signIn,
            signUp,
            signOut,
            user: data
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(): AuthContextType {
    const context = useContext<AuthContextType | undefined>(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used into a AuthProvider");
    }
    return context;
}
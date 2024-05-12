import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IUser } from "../interfaces/IUser";
import { IAppError } from "../interfaces/IAppError";
import Cookies from 'js-cookie';
import { Id, toast } from "react-toastify";
interface IAuthProvider {
    children: ReactNode
}

interface AuthContextType {
    user: IUser | undefined,
    signIn(email: string, password: string): Promise<void>,
    signOut(): void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: IAuthProvider) {
    const [data, setData] = useState<IUser>({} as IUser);

    async function signIn(email: string, password: string): Promise<void> {
        api.post<IUser>("/sessions", { email, password }).then((response) => {
            const user = response.data;
            console.log(response);
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            
            setData(user);
            return toast.success(`Olá, ${user.name}`);
        }).catch((error: IAppError) => {
            if (error.response) {
                if (error.code === "ERR_BAD_REQUEST") {
                    error.response.data.details? error.response.data.details.map((detail) => {
                        toast.error(detail.message);
                    }) : toast.error(error.response.data.message);
                } else {
                    console.log(error);
                    return toast.error(error.response.data.message);
                }
            }
            console.log(error)
        });
    }

    function signOut() {
        localStorage.removeItem("@foodexplorer:user");
        Cookies.remove("token");

        setData({} as IUser);
        return toast.success("Até a próxima.")
    }

    useEffect(() => {
        const jwtToken = Cookies.get("token");
        const user = localStorage.getItem("@foodexplorer:user");

        if (jwtToken && user) {
            setData(JSON.parse(user));
        }
    }, [])

    return(
        <AuthContext.Provider value={{
            signIn,
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
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export const api = axios.create({
    baseURL: "https://food-explorer-backend-rhxz.onrender.com:3333", //server on prod address
    withCredentials: true
})

api.interceptors.response.use(
    (response) => response, // If succeded proced
    (error) => {
        if (error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            
            if (errorMessage === 'Tokens not found') {
                localStorage.removeItem("@foodexplorer:user");
                Cookies.remove("token");
                Cookies.remove("refreshToken");

                window.location.href = "/";

                return toast.success("Tokens not found, please try again");
            }
        }
        
        return Promise.reject(error);
    }
);

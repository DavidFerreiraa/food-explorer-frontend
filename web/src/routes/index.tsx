import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";
import Cookies from "js-cookie";

export function Routes() {
    const { user } = useAuth();
    const token_expiration_date = Cookies.get("token_expiration");
    
    return(
        <BrowserRouter>
            {!user || !token_expiration_date ? <AuthRoutes/> : user.Role === "ADMIN"? <AdminRoutes/> : user.Role === "USER"? <UserRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    );
}
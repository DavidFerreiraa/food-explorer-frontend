import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { AdminRoutes } from "./admin.routes";
import { UserRoutes } from "./user.routes";

export function Routes() {
    const { user } = useAuth();
    
    return(
        <BrowserRouter>
            {!user? <AuthRoutes/> : user.Role === "ADMIN"? <AdminRoutes/> : user.Role === "USER"? <UserRoutes/> : <AuthRoutes/>}
        </BrowserRouter>
    );
}
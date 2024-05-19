import { GoSignOut } from "react-icons/go";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function LogOut() {
    const { signOut } = useAuth();
    const navigator = useNavigate();

    function handleSignOut() {
        signOut();
        navigator("/");
    }

    return(
        <Container onClick={handleSignOut}>
            <GoSignOut size={32}/>
        </Container>
    );
}
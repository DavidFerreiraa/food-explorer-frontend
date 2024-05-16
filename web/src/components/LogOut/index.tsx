import { GoSignOut } from "react-icons/go";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";

export function LogOut() {
    const { signOut } = useAuth();

    return(
        <Container onClick={signOut}>
            <GoSignOut size={32}/>
        </Container>
    );
}
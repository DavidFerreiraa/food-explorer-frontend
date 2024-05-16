import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import Logo from "../../assets/foodExplorerLogoAdmin.svg";
import LogoAdmin from "../../assets/foodExplorerLogo.svg";
import { PiReceiptBold } from "react-icons/pi";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { LogOut } from "../LogOut";

export function Header() {
    const { user } = useAuth();

    return(
        <Container>
            <img src={user?.Role === "ADMIN"? LogoAdmin : Logo } alt="logo"/>
            <SearchInput placeholder="Busque por pratos ou ingredientes"/>
            <Button icon={<PiReceiptBold/>} title={`Pedidos (0)`}/>
            <LogOut/>
        </Container>
    );
}
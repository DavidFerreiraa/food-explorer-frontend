import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import Logo from "../../assets/foodExplorerLogoAdmin.svg";
import LogoAdmin from "../../assets/foodExplorerLogo.svg";
import { PiReceiptBold } from "react-icons/pi";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { LogOut } from "../LogOut";
import { Link } from "react-router-dom";

export function Header() {
    const { user } = useAuth();
    console.log(user?.Role);
    return(
        <Container>
            <Link to="/">
                <img src={user?.Role === "ADMIN"? LogoAdmin : Logo } alt="logo"/>
            </Link>
            <SearchInput placeholder="Busque por pratos ou ingredientes"/>
            <Button icon={<PiReceiptBold/>} title={`Pedidos (0)`}/>
            <LogOut/>
        </Container>
    );
}
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import LogoAdmin from "../../assets/foodExplorerLogoAdmin.svg";
import Logo from "../../assets/foodExplorerLogo.svg";
import { PiReceiptBold } from "react-icons/pi";
import { SearchInput } from "../SearchInput";
import { Button } from "../Button";
import { LogOut } from "../LogOut";
import { Link } from "react-router-dom";

export function Header() {
    const { user } = useAuth();
    
    return(
        <Container>
            <Link to="/">
                <img src={user?.Role === "ADMIN"? LogoAdmin : Logo } alt="logo"/>
            </Link>
            <SearchInput placeholder="Busque por pratos ou ingredientes"/>
            <Link to={user?.Role === "ADMIN"? "/newproduct": ""}>
                <Button icon={user?.Role === "USER" && <PiReceiptBold/>} title={user?.Role === "ADMIN"?"Novo prato":`Pedidos (0)`}/>
            </Link>
            <LogOut/>
        </Container>
    );
}
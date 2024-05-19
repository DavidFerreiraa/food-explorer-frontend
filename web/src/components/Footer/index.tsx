import { Container } from "./styles";
import footerLogo from "../../assets/footerLogo.svg";

export function Footer() {
    return(
        <Container>
            <img src={footerLogo} alt="logo"/>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    );
}
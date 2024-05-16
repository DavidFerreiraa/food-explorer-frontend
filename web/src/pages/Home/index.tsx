import { Header } from "../../components/Header";
import { Container } from "./styles";
import Banner from "../../assets/banner.svg";

export function Home() {
    return(
        <Container>
            <Header/>
            <img src={Banner} alt="Sabores inigualáveis - banner"/>
        </Container>
    );
}
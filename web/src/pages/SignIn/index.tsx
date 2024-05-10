import { Container, Form, Holder, Legend } from "./styles";
import LogoFoodExplorer from "../../assets/foodExplorerLogo.svg";
import { FormField } from "../../components/FormField";

export function SignIn() {
    return(
        <Container>
            <Holder>
                <img src={LogoFoodExplorer} alt="food explorer logo"/>
            </Holder>
            <Holder>
                <Form>
                    <Legend>Faça login</Legend>
                    <FormField placeholder="Exemplo: Maria da Silva" label="Seu nome"/>
                    <FormField placeholder="Exemplo: exemplo@exemplo.com.br" label="Email"/>
                    <FormField placeholder="No mínimo 6 caracteres" label="Senha"/>
                </Form>
            </Holder>
        </Container>
    );
}
import { Container, Form, Holder, Legend } from "./styles";
import LogoFoodExplorer from "../../assets/foodExplorerLogo.svg";
import { FormField } from "../../components/FormField";
import { Button } from "../../components/Button";

export function SignUp() {
    return(
        <Container>
            <Holder>
                <img src={LogoFoodExplorer} alt="food explorer logo"/>
            </Holder>
            <Holder>
                <Form>
                    <Legend>Faça login</Legend>
                    <FormField placeholder="Exemplo: Maria da Silva" label="Seu nome" htmlFor="name"/>
                    <FormField placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" htmlFor="email"/>
                    <FormField placeholder="No mínimo 6 caracteres" label="Senha" htmlFor="password"/>
                    <Button title="Criar conta"/>
                    <Button title="Já tenho uma conta" onlyText={true} linkTo="/"/>
                </Form>
            </Holder>
        </Container>
    );
}
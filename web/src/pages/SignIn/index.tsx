import { Container, Form, Holder, Legend } from "./styles";
import LogoFoodExplorer from "../../assets/foodExplorerLogo.svg";
import { FormField } from "../../components/FormField";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
    const { signIn } = useAuth();

    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await signIn(email, password);
    }

    return(
        <Container>
            <Holder>
                <img src={LogoFoodExplorer} alt="food explorer logo"/>
            </Holder>
            <Holder>
                <Form onSubmit={ (event) => {handleSignIn(event)} }>
                    <Legend>Faça login</Legend>
                    <FormField placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" htmlFor="email" onChange={(e) => setEmail(e.target.value)}/>
                    <FormField placeholder="No mínimo 6 caracteres" label="Senha" htmlFor="password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button title="Entrar"/>
                    <Button title="Criar uma conta" onlyText={true} linkTo="/register"/>
                </Form>
            </Holder>
        </Container>
    );
}
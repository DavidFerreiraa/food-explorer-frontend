import { Container, Form, Holder, Legend } from "./styles";
import LogoFoodExplorer from "../../assets/foodExplorerLogo.svg";
import { FormField } from "../../components/FormField";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignUp() {
    console.log("aaaa")
    const { signUp } = useAuth();

    const [ name, setName ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ password, setPassword ] = useState<string>("");

    async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        await signUp(name, email, password);
    }

    return(
        <Container>
            <Holder>
                <img src={LogoFoodExplorer} alt="food explorer logo"/>
            </Holder>
            <Holder>
                <Form onSubmit={(event) => handleSignIn(event)}>
                    <Legend>Faça login</Legend>
                    <FormField placeholder="Exemplo: Maria da Silva" label="Seu nome" htmlFor="name" onChange={(e) => {setName(e.target.value)}}/>
                    <FormField placeholder="Exemplo: exemplo@exemplo.com.br" label="Email" htmlFor="email" onChange={(e) => {setEmail(e.target.value)}}/>
                    <FormField placeholder="No mínimo 6 caracteres" label="Senha" htmlFor="password" onChange={(e) => {setPassword(e.target.value)}}/>
                    <Button title="Criar conta"/>
                    <Link to="/">
                        <Button title="Já tenho uma conta" onlyText={true}/>
                    </Link>
                </Form>
            </Holder>
        </Container>
    );
}
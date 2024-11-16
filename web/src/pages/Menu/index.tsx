import { SearchInput } from "../../components/SearchInput";
import { useProduct } from "../../hooks/product";
import { Container, MenuItem, MenuItemWrapper } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Menu() {
    const { fetchProducts } = useProduct();
    const { user, signOut } = useAuth();
    
    async function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        console.log(event.target.value)
        if (event.target.value.length > 0) {
            fetchProducts(event.target.value).then((products) => {
                console.log(products)
            });
        }
    }

    return(
        <Container>
            <SearchInput placeholder="Busque por pratos ou ingredientes" onChange={(e) => {handleSearch(e)}}/>
                <MenuItemWrapper>
                    {
                        user?.Role === "ADMIN" &&
                        <MenuItem to="/newproduct">
                            Novo prato
                        </MenuItem>
                    }
                    <MenuItem to="/" onClick={signOut}>
                        Sair
                    </MenuItem>
                </MenuItemWrapper>
        </Container>
    );
}
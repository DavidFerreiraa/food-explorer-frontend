import { SearchInput } from "../../components/SearchInput";
import { useProduct } from "../../hooks/product";
import { Container, MenuItem, MenuItemWrapper } from "./styles";
import { useAuth } from "../../hooks/auth";

export function Menu() {
    const { fetchProducts } = useProduct();
    const { user, signOut } = useAuth();
    
    async function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        if (event.target.value.length > 0) {
            fetchProducts(event.target.value)
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
                    <MenuItem to="/favorites">
                        Meus favoritos
                    </MenuItem>
                    <MenuItem to="/orders/history">
                        Histórico de pedidos
                    </MenuItem>
                    <MenuItem to="/" onClick={signOut}>
                        Sair
                    </MenuItem>
                </MenuItemWrapper>
        </Container>
    );
}
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useCategory } from "../../hooks/category";
import { useProduct } from "../../hooks/product";
import { ICategory } from "../../interfaces/ICategory";
import { Container, MenuItem, MenuItemWrapper } from "./styles";
import { SearchInput } from "../../components/SearchInput";
import { CategoryList } from "../../components/CategoryList";

export function Menu() {
    const { products, fetchProducts } = useProduct();
    const { user, signOut } = useAuth();
    const { fetchCategories } = useCategory();
    const [ categories, setCategories ] = useState<ICategory[] | undefined>(undefined);
    const [ search, setSearch ] = useState<string>("");

    async function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value)
        event.preventDefault();
        if (event.target.value.length > 0) {
            fetchProducts(event.target.value)
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCategories().then((categories) => {
            setCategories(categories);
        });
    }, [])

    return(
        <Container>
            <SearchInput placeholder="Busque por pratos ou ingredientes" onChange={(e) => {handleSearch(e)}}/>
                {
                    (products && search.length > 0) ? (
                        categories && categories.map((category) => (
                            <CategoryList key={category.id} category={category}/>
                        ))
                    )
                    :
                    (<MenuItemWrapper>
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
                </MenuItemWrapper>)
                }
        </Container>
    );
}
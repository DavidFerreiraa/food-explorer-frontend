import { useEffect } from "react";
import { Column, Container, Title } from "./styles";
import { ProductInOrder } from "../../components/ProductInOrder";
import { useFavorites } from "../../hooks/favorites";

export function Favorites() {
    const { favorites, fetchFavorites } = useFavorites();

    useEffect(() => {
        fetchFavorites()
    }, [])

    return(
        <Container>
            <Column>
                <Title>Meus favoritos</Title>
                    {
                        favorites && favorites.map((favorite) => (
                            <ProductInOrder favorite={favorite} key={favorite.id}/>
                        )) || <p>Você não possui pedidos.</p>
                    }
            </Column>
        </Container>
    );
}
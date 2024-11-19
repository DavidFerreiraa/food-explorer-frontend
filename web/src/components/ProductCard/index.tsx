import { useEffect, useState } from "react";
import { IProduct } from "../../interfaces/IProduct";
import { api } from "../../services/api";
import { ClickableContainer, Container, ProdDescription, ProdPrice, ProdTitle } from "./styles";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiPencilSimpleBold } from "react-icons/pi";
import { useOrder } from "../../hooks/order";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { QuantityInput } from "../QuantityInput";
import { useFavorites } from "../../hooks/favorites";
import { IFavorite } from "../../interfaces/IFavorite";

export interface IProductCard extends React.HTMLAttributes<HTMLDivElement> {
    product: IProduct
}

export function ProductCard({ product, ...rest }: IProductCard) {
    const { createOrder } = useOrder();
    const { favorites, fetchFavorites,createFavorite, deleteFavorite} = useFavorites();
    const { user } = useAuth();

    const avatarURL = `${api.defaults.baseURL}/files/${product.imageUrl}`;

    const [quantity, setQuantity] = useState<number>(1);
    const [isFavorite, setIsFavorite] = useState<IFavorite | undefined>(undefined);

    const totalPrice = Number(product.price) * quantity;

    async function handleIncludeOrder() {
        await createOrder({totalPrice, quantity, productId: product.id});
        setQuantity(1);
    }

    function handleIsFavorite() {
        setIsFavorite(favorites?.find((favorite) => favorite.Product[0].id === product.id))
    }
    
    async function handleFavorite() {

        handleIsFavorite();

        if (isFavorite) {
            deleteFavorite(isFavorite.id)
        }

        if (!isFavorite) {
            createFavorite(product.id)
         }
    }

    function chooseActionIcon() {
        if (user?.Role === 'USER') {
            return (
                <ClickableContainer className="favorite-icon" onClick={handleFavorite}>
                    { isFavorite? <FaHeart className="favorited"/> : <CiHeart size={24}/>}
                </ClickableContainer>
            )
        }

        if (user?.Role === 'ADMIN') {
            return (
                <Link to={`/editproduct/${product.id}`} className="favorite-icon">
                    <PiPencilSimpleBold />
                </Link>
            )
        }
    }

    useEffect(() => {
        fetchFavorites();
    }, [])

    useEffect(() => {
        handleIsFavorite();
    }, [favorites])

    return (
        <Container {...rest}>
                { chooseActionIcon() }
            <Link to={`/showproduct/${product.id}`}>
                <ClickableContainer>
                    <img src={avatarURL} alt="imagem do produto" />
                    <ProdTitle>{product.title}</ProdTitle>
                    <ProdDescription>{product.description}</ProdDescription>
                    <ProdPrice>R${(product.price).padEnd(5, ".00")}</ProdPrice>
                </ClickableContainer>
            </Link>
            <QuantityInput includeButtonTitle="incluir" quantity={quantity} handleChange={setQuantity} handleIncludeOrder={handleIncludeOrder}/>
        </Container>
    );
}

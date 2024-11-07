import { useState } from "react";
import { IProduct } from "../../interfaces/IProduct";
import { api } from "../../services/api";
import { ClickableContainer, Container, ProdDescription, ProdPrice, ProdTitle } from "./styles";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiPencilSimpleBold } from "react-icons/pi";
import { useOrder } from "../../hooks/order";
import { AxiosError } from "axios";
import { IDataError } from "../../interfaces/IAppError";
import { toast } from "react-toastify";
import { IFavorite } from "../../interfaces/IFavorite";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";
import { QuantityInput } from "../QuantityInput";

export interface IProductCard extends React.HTMLAttributes<HTMLDivElement> {
    product: IProduct
}

export function ProductCard({ product, ...rest }: IProductCard) {
    const { createOrder } = useOrder();
    const { user } = useAuth();

    const avatarURL = `${api.defaults.baseURL}/files/${product.imageUrl}`;

    const [quantity, setQuantity] = useState<number>(1);
    const [favorite, setFavorite] = useState<IFavorite | null>(product.favoritesId? {id: product.favoritesId, userId: product.creatorId} : null);

    const totalPrice = Number(product.price) * quantity;

    async function handleIncludeOrder() {
        await createOrder({totalPrice, quantity, productId: product.id});
        setQuantity(1);
    }

    async function handleFavorite() {
        if (favorite) {
            await api.delete(`/favorites/${favorite.id}`).then((response) => {
                console.log("delete")
                if (response.data) {
                    toast.success(response.data.message)
                    setFavorite(null)
                }
            }).catch((error: AxiosError<IDataError>) => {
                if (error.response) {
                    error.response.data.details? error.response.data.details.map((detail) => {
                        toast.error(detail.message);
                    }) : toast.error(error.response.data.message);
                }
                console.log(error)
            });
        }

        if (!favorite) {
            await api.post(`/favorites/${product.id}`).then((response) => {
                toast.success("Product added to favorites!")
                setFavorite(response.data)
            }).catch((error: AxiosError<IDataError>) => {
                if (error.response) {
                    error.response.data.details? error.response.data.details.map((detail) => {
                        toast.error(detail.message);
                    }) : toast.error(error.response.data.message);
                }
                console.log(error)
            });
         }
    }

    function chooseActionIcon() {
        if (user?.Role === 'USER') {
            return (
                <ClickableContainer className="favorite-icon" onClick={handleFavorite}>
                    { favorite? <FaHeart size={24} className="favorited"/> : <CiHeart size={24}/>}
                </ClickableContainer>
            )
        }

        if (user?.Role === 'ADMIN') {
            return (
                <ClickableContainer className="favorite-icon">
                    <PiPencilSimpleBold size={24} />
                </ClickableContainer>
            )
        }
    }

    return (
        <Container {...rest}>
                { chooseActionIcon() }
            <Link to={`/showproduct/${product.id}`}>
                <ClickableContainer>
                    <img src={avatarURL} alt="imagem do produto" />
                    <ProdTitle>{product.title} &#11166;</ProdTitle>
                    <ProdDescription>{product.description}</ProdDescription>
                    <ProdPrice>R${(product.price).padEnd(5, ".00")}</ProdPrice>
                </ClickableContainer>
            </Link>
            <QuantityInput includeButtonTitle="incluir" quantity={quantity} handleChange={setQuantity} handleIncludeOrder={handleIncludeOrder}/>
        </Container>
    );
}

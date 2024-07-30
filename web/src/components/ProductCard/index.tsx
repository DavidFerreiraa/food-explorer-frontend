import { useState } from "react";
import { IProduct } from "../../interfaces/IProduct";
import { api } from "../../services/api";
import { ClickableContainer, Container, ProdDescription, ProdPrice, ProdQuantityButton, ProdQuantityContainer, ProdQuantityInput, ProdTitle } from "./styles";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Button } from "../Button";
import { useOrder } from "../../hooks/order";
import { AxiosError } from "axios";
import { IDataError } from "../../interfaces/IAppError";
import { toast } from "react-toastify";
import { IFavorite } from "../../interfaces/IFavorite";

export interface IProductCard extends React.HTMLAttributes<HTMLDivElement> {
    product: IProduct
}

export function ProductCard({ product, ...rest }: IProductCard) {
    const { createOrder } = useOrder();

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

    console.log(favorite)

    return (
        <Container {...rest}>
            <ClickableContainer className="favorite-icon" onClick={handleFavorite}>
                { favorite? <FaHeart size={24} className="favorited"/> : <CiHeart size={24} strokeWidth={2}/> }
            </ClickableContainer>
            <ClickableContainer>
                <img src={avatarURL} alt="imagem do produto" />
                <ProdTitle>{product.title} &#11166;</ProdTitle>
                <ProdDescription>{product.description}</ProdDescription>
                <ProdPrice>R${(product.price).padEnd(5, ".00")}</ProdPrice>
            </ClickableContainer>
            <ProdQuantityContainer>
                <ProdQuantityButton onClick={() => setQuantity(quantity - 1)}><FaMinus size={24}/></ProdQuantityButton>
                <ProdQuantityInput type="number" value={String(quantity).padStart(2, "0")} onChange={(e) => setQuantity(Number(e.target.value))}/>
                <ProdQuantityButton onClick={() => setQuantity(quantity + 1)}><FaPlus size={24}/></ProdQuantityButton>
                <Button title="incluir" onClick={handleIncludeOrder}/>
            </ProdQuantityContainer>
        </Container>
    );
}

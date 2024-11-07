import { Link, useParams } from "react-router-dom";
import { Container, ProdDescription, ProdDetailContainer, ProdIngredient, ProdIngredientWrapper, ProdTitle, ShowProductBody } from "./styles";
import { Button } from "../../components/Button";
import { RxCaretLeft } from "react-icons/rx";
import { ProdContainer } from "./styles";
import { useProduct } from "../../hooks/product";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { QuantityInput } from "../../components/QuantityInput";
import { useOrder } from "../../hooks/order";

export function ShowProduct() {
    const { id } = useParams();
    const { user } = useAuth();
    const { createOrder } = useOrder();
    const { product, showProduct } = useProduct();
    const [quantity, setQuantity] = useState<number>(1);
    
    const productImageUrl = `${api.defaults.baseURL}/files/${product?.imageUrl}`;
    const totalPrice = Number(product?.price) * quantity;

    async function handleIncludeOrder() {
        if (!product) {
            return;
        }
        await createOrder({totalPrice, quantity, productId: product.id});
        setQuantity(1);
    }

    function chooseButton() {
        if (user?.Role === "USER") {
            return <Link to={`/editplate/${id}`}><Button title={`incluir`}/></Link>
        }

        if (user?.Role === "ADMIN") {
            return <QuantityInput includeButtonTitle={`inluir - R$ ${totalPrice}`} quantity={quantity} handleChange={setQuantity} handleIncludeOrder={handleIncludeOrder} />
        }
    }

    useEffect(() => {
        showProduct(id);
    }, [])

    return (
        <Container>
            <ShowProductBody>
                <Link to="..">
                    <Button title="Voltar" icon={<RxCaretLeft size={32}/>} onlyText={true} />
                </Link>
                <ProdContainer>
                    <img src={productImageUrl} alt="Imagem do produto"/>
                    <ProdDetailContainer>
                        <ProdTitle>{product?.title}</ProdTitle>
                        <ProdDescription>{product?.description}</ProdDescription>
                        <ProdIngredientWrapper>
                            {
                                product?.Ingredients.map((ingredient) => (
                                    <ProdIngredient key={ingredient.id}>{ingredient.name}</ProdIngredient>
                                ))
                            }
                        </ProdIngredientWrapper>
                        { chooseButton() }
                    </ProdDetailContainer>
                </ProdContainer>
            </ShowProductBody>
        </Container>
    )
}
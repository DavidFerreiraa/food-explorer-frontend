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
import { IProduct } from "../../interfaces/IProduct";
import { RiLoader3Fill } from "react-icons/ri";

export function ShowProduct() {
    const { id } = useParams();
    const { user } = useAuth();
    const { createOrder } = useOrder();
    const { showProduct } = useProduct();

    const [loading, setLoading] = useState(true);

    const [quantity, setQuantity] = useState<number>(1);
    const [product, setProduct] = useState<IProduct | undefined>(undefined);
    const productImageUrl = `${api.defaults.baseURL}/files/${product?.imageUrl}`;
    const totalPrice = Number(product?.price) * quantity;

    async function handleIncludeOrder() {
        if(!product) {
            return;
        }
        await createOrder({totalPrice, quantity, productId: product.id});
        setQuantity(1);
    }

    function chooseButton() {
        if (user?.Role === "ADMIN") {
            return <Link to={`/editproduct/${id}`}><Button title={`Editar prato`}/></Link>
        }

        if (user?.Role === "USER") {
            return <QuantityInput includeButtonTitle={`inluir - R$ ${totalPrice.toFixed(2)}`} quantity={quantity} handleChange={setQuantity} handleIncludeOrder={handleIncludeOrder} />
        }
    }

    useEffect(() => {
        if (id) {
            showProduct(id).then((product) => {
                setProduct(product);
                setLoading(false);
            });
        }
    }, [])

    // Show a loader while the page is loading
    if (loading) {
        return <RiLoader3Fill color="#fff"/>;
    }

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